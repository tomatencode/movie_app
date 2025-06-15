import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { initializeTtsListeners, playTTS } from '../tts';
import wordsData from '../assets/texts/Vorlesen_Wörter.json';

// Types
type VorlesenParams = {
  selectedOptions: string;
} & Record<string, string | string[]>;

// Constants
const WINDOW = Dimensions.get('window');
const IMAGE_SIZE = Math.min(WINDOW.width, WINDOW.height) / 2;

// Utility functions
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Components
const NavigationButton = ({
                              onPress,
                              disabled,
                              icon
                          }: {
    onPress: () => void;
    disabled: boolean;
    icon: "left" | "right"
}) => (
    <Pressable
        className={`w-16 h-16 rounded-full justify-center items-center ${
            disabled ? 'bg-secondary/50' : 'bg-secondary'
        }`}
        onPress={onPress}
        disabled={disabled}
    >
        <AntDesign name={icon} size={24} color="white" />
    </Pressable>
);

const WordDisplay = ({
                         showingSolution,
                         word,
                         isReading
                     }: {
    showingSolution: boolean;
    word: string;
    isReading: boolean
}) => (
    <View style={{ marginHorizontal: 64 }}>
        {showingSolution ? (
            <Text
                style={{
                    fontSize: IMAGE_SIZE / 4,
                    paddingHorizontal: 10,
                    width: IMAGE_SIZE * 2,
                    flexWrap: 'wrap'
                }}
                className="text-center text-primary"
                numberOfLines={3}
                adjustsFontSizeToFit
            >
                {word}
            </Text>
        ) : (
            <AntDesign
                name="sound"
                size={IMAGE_SIZE}
                color={isReading ? "#000000" : "#666666"}
                style={{ marginHorizontal: 64 }}
            />
        )}
    </View>
);

export default function Vorlesen() {
    const { selectedOptions = '' } = useLocalSearchParams<VorlesenParams>();
    const selectedOptionsArray = selectedOptions.split(',');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isReading, setIsReading] = useState(false);
    const [showingSolution, setShowingSolution] = useState(false);
    const [hasBeenRead, setHasBeenRead] = useState(false); // New state to track if word has been read

    const [shuffledWords] = useState(() => {
        const allWords = selectedOptionsArray.flatMap(
            category => wordsData[category as keyof typeof wordsData] || []
        );
        return shuffleArray(allWords);
    });

    useEffect(() => {
        initializeTtsListeners();
    }, []);

    const isFirstWord = currentImageIndex === 0;
    const isLastWord = currentImageIndex === shuffledWords.length - 1;
    const currentWord = shuffledWords[currentImageIndex];

    const handleNavigation = (direction: 'next' | 'previous') => {
        setCurrentImageIndex(prev => direction === 'next' ? prev + 1 : prev - 1);
        setShowingSolution(false);
        setHasBeenRead(false); // Reset the read status when navigating to a new word
    };

    const handleTTS = async (shouldShowSolution = false) => {
        if (shouldShowSolution) {
            setShowingSolution(true);
        } else {
            setIsReading(true);
        }

        try {
            await playTTS(currentWord, {
                voice: "de-DE-Standard-A",
                onDone: () => {
                    if (!shouldShowSolution) {
                        setIsReading(false);
                        setHasBeenRead(true); // Mark the word as read when TTS completes
                    }
                },
            });
        } catch (error) {
            if (!shouldShowSolution) {
                setIsReading(false);
            }
        }
    };

    return (
        <View className="flex-1 items-center p-4">
            <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
            />

            <View className="flex-1 items-center justify-center">
                <View className="flex-row items-center">
                    <NavigationButton
                        onPress={() => handleNavigation('previous')}
                        disabled={isFirstWord}
                        icon="left"
                    />

                    <WordDisplay
                        showingSolution={showingSolution}
                        word={currentWord}
                        isReading={isReading}
                    />

                    <NavigationButton
                        onPress={() => handleNavigation('next')}
                        disabled={isLastWord}
                        icon="right"
                    />
                </View>

                <View className="flex-row justify-center space-x-4">
                    <Pressable
                        className="bg-primary px-8 py-4 rounded-xl -translate-x-2"
                        onPress={() => handleTTS()}
                    >
                        <Text className="text-white text-lg font-semibold">Vorlesen</Text>
                    </Pressable>

                    {hasBeenRead && ( // Only show the solution button if the word has been read
                        <Pressable
                            className="bg-accent px-8 py-4 rounded-xl translate-x-2"
                            onPress={() => handleTTS(true)}
                        >
                            <Text className="text-white text-lg font-semibold">
                                {showingSolution ? "Lösung ausblenden" : "Lösung anzeigen"}
                            </Text>
                        </Pressable>
                    )}
                </View>

                <Text className="text-6xl text-accent font-bold text-center p-8">
                    {currentImageIndex + 1}
                </Text>
            </View>

            <View className="absolute bottom-8 left-8">
                <Pressable
                    className="bg-secondary px-8 py-4 rounded-xl"
                    onPress={() => router.back()}
                >
                    <Text className="text-white text-lg font-semibold">Fertig</Text>
                </Pressable>
            </View>
        </View>
    );
}
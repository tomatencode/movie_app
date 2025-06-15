import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import {imageAssets, isImageCategory } from '../imageAssets'; // Add imports
import {useState, useMemo, useEffect} from 'react';
import { initializeTtsListeners, playTTS } from '../tts';

// Types
type SearchParams = {
    selectedOptions: string;
}

// Constants
const IMAGE_SIZE = Math.min(
    Dimensions.get('window').width, 
    Dimensions.get('window').height
) / 2;

const LOGO_DIMENSIONS = {
    width: 150,
    height: 150,
};

// Utils
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Components
const NavigationButton: React.FC<{
    onPress: () => void;
    disabled: boolean;
    direction: 'left' | 'right';
}> = ({ onPress, disabled, direction }) => (
    <Pressable
        className={`w-16 h-16 rounded-full justify-center items-center ${
            disabled ? 'bg-secondary/50' : 'bg-secondary'
        }`}
        onPress={onPress}
        disabled={disabled}
    >
        <AntDesign name={direction} size={24} color="white" />
    </Pressable>
);

export default function Wortbildkarten() {
    const params = useLocalSearchParams<SearchParams>();
    const selectedOptions = params.selectedOptions ?? '';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showingSolution, setShowingSolution] = useState(false);

    const shuffledImages = useMemo(() => {
        const selectedOptionsArray = selectedOptions.split(',');
        const images = selectedOptionsArray
            .filter(isImageCategory)
            .flatMap(category => 
                Object.entries(imageAssets[category]).map(([word, image]) => ({
                    image,
                    word
                }))
            );
        return shuffleArray(images);
    }, [selectedOptions]);

    useEffect(() => {
        initializeTtsListeners();
    }, []);

    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === shuffledImages.length - 1;

    const read_word = async (word: string) => {
        try {
            await playTTS(word, {
                voice: "de-DE-Standard-A",
                onDone: () => {},
            });
        } catch (error) {
        }
    }

    const showSolution = () => {
        setShowingSolution(ShowingSolution => !ShowingSolution);
    }

    const handleNext = () => {
        if (!isLastImage) {
            setCurrentImageIndex(prev => prev + 1);
            setShowingSolution(false);
        }
    };

    const handlePrevious = () => {
        if (!isFirstImage) {
            setCurrentImageIndex(prev => prev - 1);
            setShowingSolution(false);
        }
    };

    return (
        <View className="flex-1 items-center p-4">
            <Image
                source={require('../assets/images/logo.png')}
                style={LOGO_DIMENSIONS}
                resizeMode="contain"
            />

            <View className="flex-1 items-center justify-center">
                <View className="flex-row items-center">
                    <NavigationButton
                        direction="left"
                        onPress={handlePrevious}
                        disabled={isFirstImage}
                    />

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
                                {shuffledImages[currentImageIndex].word}
                            </Text>
                        ) : (
                    <Image
                        source={shuffledImages[currentImageIndex].image}
                        style={{
                            width: IMAGE_SIZE,
                            height: IMAGE_SIZE,
                            marginHorizontal: 64,
                        }}
                        resizeMode="contain"
                    />
                        )}
                    </View>


                    <NavigationButton
                        direction="right"
                        onPress={handleNext}
                        disabled={isLastImage}
                    />
                </View>

                <View className="flex-row justify-center space-x-4">
                    <Pressable
                        className="bg-primary px-8 py-4 rounded-xl -translate-x-2"
                        onPress={() => read_word(shuffledImages[currentImageIndex].word)}
                    >
                        <Text className="text-white text-lg font-semibold">Vorlesen</Text>
                    </Pressable>


                    <Pressable
                        className="bg-accent px-8 py-4 rounded-xl translate-x-2"
                        onPress={showSolution}
                    >
                        <Text className="text-white text-lg font-semibold">
                            {showingSolution ? "Lösung ausblenden" : "Lösung anzeigen"}
                        </Text>
                    </Pressable>

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
                    <Text className="text-white text-lg font-semibold">
                        Fertig
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
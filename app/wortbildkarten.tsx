import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { getImagesForCategories } from '../imageAssets';
import { useState, useMemo } from 'react';

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

    const shuffledImages = useMemo(() => {
        const selectedOptionsArray = selectedOptions.split(',');
        const images = getImagesForCategories(selectedOptionsArray);
        return shuffleArray(images);
    }, [selectedOptions]);

    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === shuffledImages.length - 1;

    const handleNext = () => {
        if (!isLastImage) {
            setCurrentImageIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (!isFirstImage) {
            setCurrentImageIndex(prev => prev - 1);
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

                    <Image
                        source={shuffledImages[currentImageIndex]}
                        style={{
                            width: IMAGE_SIZE,
                            height: IMAGE_SIZE,
                            marginHorizontal: 64,
                        }}
                        resizeMode="contain"
                    />

                    <NavigationButton
                        direction="right"
                        onPress={handleNext}
                        disabled={isLastImage}
                    />
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
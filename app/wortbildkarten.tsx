import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { imageAssets, getImagesForCategories } from '../imageAssets';
import { useState } from 'react';

const handleBackPress = () => {
    router.back();
};

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export default function Wortbildkarten() {
    const {selectedOptions} = useLocalSearchParams<{ selectedOptions: string }>();
    const selectedOptionsArray = selectedOptions.split(',');
    
    // Use state initializer function to ensure shuffling happens only once
    const [shuffledImages] = useState(() => {
        const images = getImagesForCategories(selectedOptionsArray);
        return shuffleArray(images);
    });
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const image_size = Math.min(Dimensions.get("window").width, Dimensions.get("window").height) / 2;

    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === shuffledImages.length - 1;

    const handleNext = () => {
        if (!isLastImage) {
            setCurrentImageIndex((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (!isFirstImage) {
            setCurrentImageIndex((prev) => prev - 1);
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
                    <Pressable
                        className={`w-16 h-16 rounded-full justify-center items-center ${
                            isFirstImage ? 'bg-secondary/50' : 'bg-secondary'
                        }`}
                        onPress={handlePrevious}
                        disabled={isFirstImage}
                    >
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>

                    <Image
                        source={shuffledImages[currentImageIndex]}
                        style={{width: image_size, height: image_size, marginHorizontal: 64}}
                        resizeMode="contain"
                    />

                    <Pressable
                        className={`w-16 h-16 rounded-full justify-center items-center ${
                            isLastImage ? 'bg-secondary/50' : 'bg-secondary'
                        }`}
                        onPress={handleNext}
                        disabled={isLastImage}
                    >
                        <AntDesign name="right" size={24} color="white" />
                    </Pressable>
                </View>
                <Text className="text-6xl text-accent font-bold text-center p-8">{currentImageIndex+1}</Text>
            </View>

            <View className="absolute bottom-8 left-8">
                <Pressable
                    className="bg-secondary px-8 py-4 rounded-xl"
                    onPress={handleBackPress}
                >
                    <Text className="text-white text-lg font-semibold">Fertig</Text>
                </Pressable>
            </View>
        </View>
    );
}
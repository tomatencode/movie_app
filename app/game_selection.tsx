import {Text, View, Pressable, Image, ScrollView, Dimensions} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from 'react';

type GameOption = {
    id: number;
    title: string;
    description: string;
    image: any;
    route: `/${string}`;
};

const gameOptions: GameOption[] = [
    {
        id: 1,
        title: "Wortbildkarten",
        description: "Schreibe das Wort das auf dem Bild gezeigt ist auf",
        image: require("../assets/images/logo.png"),
        route: "/wortbildkarten" as const,
    },
    {
        id: 2,
        title: "Vorlesen",
        description: "Schreibe den vorgelesenen Satzt auf",
        image: require("../assets/images/logo.png"),
        route: "/drag-drop" as const,
    },
    {
        id: 3,
        title: "Memory",
        description: "Finde passende Paare",
        image: require("../assets/images/logo.png"),
        route: "/memory" as const,
    },
];

export default function GameSelection() {
    const { selectedOptions } = useLocalSearchParams<{ selectedOptions: string }>();
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const screenHeight = Dimensions.get('window').height;
    
    // Use same constants as index for consistency
    const VERTICAL_SPACING = 16;
    const LOGO_SIZE = 150;
    const TITLE_HEIGHT = 80;
    
    const handleBackPress = () => {
        router.back();
    };

    const handleOptionPress = (route: GameOption['route']) => {
        router.push({
            // @ts-ignore
            pathname: route,
            params: { selectedOptions }
        });
    };

    // Calculate the available height for the list
    const availableHeight = screenHeight - (LOGO_SIZE + TITLE_HEIGHT + VERTICAL_SPACING * 3)/100;

    return (
        <View className="flex-1 p-4">
            <View className="items-center">
                {/* Logo */}
                <Image
                    source={require("../assets/images/logo.png")}
                    style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
                    resizeMode="contain"
                />

                {/* Title */}
                <View style={{ height: TITLE_HEIGHT }} className="justify-center my-4">
                    <Text className="text-5xl text-primary font-bold text-center">
                        Wie willst du lernen?
                    </Text>
                    <Text className="text-lg text-accent mt-2 text-center">
                        Themen: {selectedOptions}
                    </Text>
                </View>
            </View>

            <View style={{ height: availableHeight}}>
                <ScrollView
                    className="px-2"
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{
                        flexGrow: 0,
                        minHeight: '100%'
                    }}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        setScrollEnabled(contentHeight > availableHeight);
                    }}
                    scrollEnabled={scrollEnabled}
                >
                    {/* Rest of the game options code remains the same */}
                    {gameOptions.map((option) => (
                        // ... existing game options code
                        <Pressable
                            key={option.id}
                            className="flex-row items-center bg-white rounded-xl p-4 mb-6 shadow-lg"
                            style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.1,
                                shadowRadius: 6,
                                elevation: 5,
                            }}
                            onPress={() => handleOptionPress(option.route)}
                        >
                            <Image
                                source={option.image}
                                className="w-24 h-24 rounded-lg"
                                resizeMode="cover"
                            />
                            <View className="flex-1 ml-4">
                                <Text className="text-xl font-bold text-primary mb-2">
                                    {option.title}
                                </Text>
                                <Text className="text-gray-600">
                                    {option.description}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            <View className="absolute bottom-8 left-8">
                <Pressable
                    className="bg-secondary px-8 py-4 rounded-xl"
                    onPress={handleBackPress}
                >
                    <Text className="text-white text-lg font-semibold">Zurück</Text>
                </Pressable>
            </View>
        </View>
    );
}
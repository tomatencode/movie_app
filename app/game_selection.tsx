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
    description: "Schreibe das Wort das auf dem Bild gezeigt ist auf.",
    image: require("../assets/images/logo.png"),
    route: "/multiple-choice" as const,
  },
  {
    id: 2,
    title: "Vorlesen",
    description: "Schreibe den vorgelesenen Satzt auf.",
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
  
  const selectedOptionsArray = selectedOptions ? selectedOptions.split(',').map(Number) : [];
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleBackPress = () => {
    router.back();
  };

const handleOptionPress = (route: GameOption['route']) => {
    // @ts-ignore
    router.push(route);
};

  // Calculate the available height for the list
  const screenHeight = Dimensions.get('window').height;
  const topSpacing = 300;
  const bottomSpacing = 100;
  const availableHeight = screenHeight - topSpacing - bottomSpacing;

  return (
    <View className="flex-1 p-4">
        <View className="absolute top-4 left-1/2 -translate-x-1/2 z-10 items-center">
            <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
            />
            <Text className="text-5xl text-primary font-bold px-4 text-center">Wie willst du lernen?</Text>
        </View>

        <View 
            style={{ 
                height: availableHeight,
                marginTop: 250 
            }}
        >
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
                {gameOptions.map((option) => (
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
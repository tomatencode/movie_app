import {Text, View, Pressable, Image} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function GameSelection() {
  const { selectedOptions } = useLocalSearchParams<{ selectedOptions: string }>();

  const selectedOptionsArray = selectedOptions ? selectedOptions.split(',').map(Number) : [];

  const handleBackPress = () => {
    router.back();
  };

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
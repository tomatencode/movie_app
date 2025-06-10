import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Index() {
  const options = [
    "Dopplungen", "Dopplungen2", "ck_k",
    "tz_z", "s_ss_ß", "e_ä_eu_äu",
    "Komposita", "H", "Sch"
  ];

  const [toggleStates, setToggleStates] = useState(
    Array(options.length).fill(false)
  );

  const toggleButton = (index: number) => {
    const newStates = [...toggleStates];
    newStates[index] = !newStates[index];
    setToggleStates(newStates);
  };

  const handleWeiterPress = () => {
    const selectedOptions = options.filter((_, index) => toggleStates[index]);

    router.push({
      pathname: "/game_selection",
      params: {
        selectedOptions: selectedOptions
      }
    });
  };

  return (
    <View className="flex-1">
      {/* Logo in absolute Container */}
      <View className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </View>
      
      {/* Main container */}
      <View className="flex-1 items-center">
        <View className="flex-1 justify-center items-center gap-8">
          <Text className="text-5xl text-primary font-bold px-4">Was willst du lernen?</Text>
          
          <View className="w-[320px] gap-4">
            <View className="flex-row justify-between">
              {[0, 1, 2].map((index) => (
                <Pressable
                  key={index}
                  className={`w-24 h-24 rounded-xl justify-center items-center ${
                    toggleStates[index] ? "bg-accent" : "bg-gray-200"
                  }`}
                  onPress={() => toggleButton(index)}
                >
                  <Text className={toggleStates[index] ? "text-white" : "text-black"}>
                    {options[index]}
                  </Text>
                </Pressable>
              ))}
            </View>
            
            <View className="flex-row justify-between">
              {[3, 4, 5].map((index) => (
                <Pressable
                  key={index}
                  className={`w-24 h-24 rounded-xl justify-center items-center ${
                    toggleStates[index] ? "bg-accent" : "bg-gray-200"
                  }`}
                  onPress={() => toggleButton(index)}
                >
                  <Text className={toggleStates[index] ? "text-white" : "text-black"}>
                    {options[index]}
                  </Text>
                </Pressable>
              ))}
            </View>
            
            <View className="flex-row justify-between">
              {[6, 7, 8].map((index) => (
                <Pressable
                  key={index}
                  className={`w-24 h-24 rounded-xl justify-center items-center ${
                    toggleStates[index] ? "bg-accent" : "bg-gray-200"
                  }`}
                  onPress={() => toggleButton(index)}
                >
                  <Text className={toggleStates[index] ? "text-white" : "text-black"}>
                    {options[index]}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <Pressable 
            className="bg-secondary px-8 py-4 rounded-xl"
            onPress={handleWeiterPress}
          >
            <Text className="text-white text-lg font-semibold">Weiter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
import { Text, View, Image, Pressable, FlatList, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const options = [
    "dopplungen", "Dopplungen2", "ck_k",
    "tz_z", "s_ss_ß", "e_ä_eu_äu",
    "Komposita", "H", "Sch"
  ];

  const [toggleStates, setToggleStates] = useState(
    Array(options.length).fill(false)
  );

  const hasSelectedTopics = toggleStates.some(state => state);

  // Adjusted padding and spacing values
  const PADDING = 16;
  const VERTICAL_SPACING = 16;
  const LOGO_SIZE = 150;
  const WEITER_BUTTON_HEIGHT = 56;
  const TITLE_HEIGHT = 80;

  // Calculate available space for the grid
  const availableHeight = height - (LOGO_SIZE + TITLE_HEIGHT + WEITER_BUTTON_HEIGHT + VERTICAL_SPACING * 6);
  const availableWidth = width - (PADDING * 2);
  const gridSize = Math.min(availableHeight, availableWidth);
  const buttonSize = (gridSize - 16) / 3; // Account for gaps between buttons

  const toggleButton = (index: number) => {
    setToggleStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleWeiterPress = () => {
    const selectedOptions = options.filter((_, index) => toggleStates[index]);
    router.push({
      pathname: "/game_selection",
      params: { selectedOptions }
    });
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <Pressable
      className={`m-1 rounded-xl justify-center items-center ${
        toggleStates[index] ? 'bg-accent' : 'bg-[#E5E5E5]'
      }`}
      style={{
        width: buttonSize,
        height: buttonSize,
      }}
      onPress={() => toggleButton(index)}
    >
      <Text className={`text-center px-2 ${toggleStates[index] ? "text-white" : "text-black"}`}>
        {item}
      </Text>
    </Pressable>
  );

  return (
    <View className="flex-1 items-center py-4">
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
        resizeMode="contain"
      />

      <View style={{ height: TITLE_HEIGHT }} className="justify-center my-4">
        <Text className="text-5xl text-primary font-bold text-center px-4">
          Was willst du lernen?
        </Text>
      </View>

      <View style={{ width: gridSize, height: gridSize }}>
        <FlatList
          data={options}
          renderItem={renderItem}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={{ alignItems: 'center' }}
        />
      </View>

      <View className="absolute bottom-8 w-full items-center">
        <Pressable
          className={`px-8 py-4 rounded-xl ${
            hasSelectedTopics ? 'bg-secondary' : 'bg-secondary/50'
          }`}
          style={{ height: WEITER_BUTTON_HEIGHT }}
          onPress={hasSelectedTopics ? handleWeiterPress : undefined}
          disabled={!hasSelectedTopics}
        >
          <Text
            className={`text-lg font-semibold ${
              hasSelectedTopics ? 'text-white' : 'text-gray-200'
            }`}
          >
            Weiter
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
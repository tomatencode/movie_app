import { Stack } from 'expo-router';
import './globals.css';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="game_selection" 
          options={{headerShown: false,}}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
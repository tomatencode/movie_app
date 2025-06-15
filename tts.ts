import * as Speech from 'expo-speech';
import { Voice, VoiceQuality } from 'expo-speech';

// Using the correct types from expo-speech
export interface VoiceOptions extends Voice {
    identifier: string;
    language: string;
    name: string;
    quality: VoiceQuality;
}

// Function to get all available voices
export const getAvailableVoices = async (): Promise<Voice[]> => {
    try {
        const voices = await Speech.getAvailableVoicesAsync();
        return voices;
    } catch (error) {
        console.error('Error getting voices:', error);
        return [];
    }
};

// Function to initialize Text-to-Speech (TTS) settings
export const initializeTtsListeners = async () => {
    try {
        console.log('Speech initializatio');
    } catch (error) {
        console.log('Speech initialization failed');
        console.error(error);
    }
};

// Function to play a message using TTS
export const playTTS = async (
    message: string,
    options?: {
        voice?: string;
        language?: string;
        pitch?: number;
        rate?: number;
        onDone?: () => void;
    }
) => {
    try {
        await Speech.stop();

        await Speech.speak(message, {
            language: options?.language ?? 'de',
            pitch: options?.pitch ?? 1.0,
            rate: options?.rate ?? 0.75,
            voice: options?.voice,
            onDone: options?.onDone,
        });
    } catch (error) {
        console.error('Speech Error:', error);
    }
};
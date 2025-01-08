import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Custom theme colors
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2563eb',
    secondary: '#3b82f6',
    tertiary: '#60a5fa',
    background: '#f8fafc',
    surface: '#ffffff',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
  },
};

export default function RootLayout() {
  const [loaded] = useFonts({
    // You can add custom fonts here
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <ThemeProvider value={DefaultTheme}>
          <Slot />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
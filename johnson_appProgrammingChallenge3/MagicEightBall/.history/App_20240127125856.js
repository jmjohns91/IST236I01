import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, PressableAndroidRippleConfig, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { TailwindProvider } from 'nativewind';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text className="text-red-500 p-10">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    
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

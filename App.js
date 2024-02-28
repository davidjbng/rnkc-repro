import { StyleSheet, Text, View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function App() {
  return (
    <KeyboardProvider>
      <View style={styles.container}>
        <Text>Hello Expo with Fabric</Text>
      </View>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

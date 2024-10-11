import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Modal() {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      {/* Dismiss modal when pressing outside */}
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <ThemedView style={styles.modal}>
        <Animated.View entering={SlideInRight} style={styles.modal__content}>
          <ThemedView style={styles.close}>
            <Link href="/">
              <AntDesign name="close" size={30} color="grey" />
            </Link>
          </ThemedView>
          <ThemedText style={styles.bold}>Modal Screen</ThemedText>
        </Animated.View>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#00000040",
  },

  modal: {
    width: "80%",
    height: "90%",
  },

  modal__content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  bold: { fontWeight: "bold", marginBottom: 10 },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

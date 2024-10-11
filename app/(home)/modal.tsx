import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeIn, SlideInRight } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useInfo } from "@/hooks/context/useInfo";
import SelectionCard from "@/components/SelectionCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Modal() {
  const { selectedList } = useInfo();

  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>

      <ThemedView style={styles.modal}>
        <Animated.View entering={SlideInRight} style={styles.modal__container}>
          <ThemedView style={styles.modal__oontent}>
            <ThemedView style={styles.close}>
              <Link href="/">
                <AntDesign name="close" size={30} color="grey" />
              </Link>
            </ThemedView>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {selectedList.map((selection) => (
                <SelectionCard
                  key={`${selection.id}-${selection.name}-${selection.type}`}
                  selection={selection}
                />
              ))}
            </ScrollView>
          </ThemedView>
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

  modal__container: {
    width: "100%",
    height: "100%",
  },

  modal__oontent: {
    paddingBottom: 20,
    paddingTop: 60,
  },

  bold: { fontWeight: "bold", marginBottom: 10 },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
});

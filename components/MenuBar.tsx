import React from "react";
import { ThemedView } from "./ThemedView";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";

const MenuBar = () => {
  const secondary = useThemeColor({}, "secondary");

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderColor: secondary,
      borderWidth: 2,
      borderStyle: "solid",
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });

  return (
    <ThemedView style={styles.container}>
      <Link href={"/modal"}>
        <Feather name="menu" size={30} color={secondary} />
      </Link>
    </ThemedView>
  );
};

export default MenuBar;

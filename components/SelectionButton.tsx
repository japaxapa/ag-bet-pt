import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { SelectionType } from "@/types/types";

interface SelectionButtonProps {
  selection: SelectionType;
}

const SelectionButton = ({ selection }: SelectionButtonProps) => {
  if (!selection.name) {
    return;
  }

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 5,
    },

    border: {
      borderColor: "grey",
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 8,
    },

    title: {
      paddingVertical: 10,
    },

    btnContainer: {
      width: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <Pressable style={{ ...styles.container, ...styles.border }}>
      <Link href={"/modal"}>
        <ThemedView style={styles.btnContainer}>
          <ThemedText>{selection.name}</ThemedText>
          <ThemedText>{selection.price}</ThemedText>
        </ThemedView>
      </Link>
    </Pressable>
  );
};

export default SelectionButton;

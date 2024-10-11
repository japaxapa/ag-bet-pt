import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "./ThemedText";
import { SelectionFullType, useInfo } from "@/hooks/context/useInfo";

interface SelectionButtonProps {
  selection: SelectionFullType;
}

const SelectionButton = ({ selection }: SelectionButtonProps) => {
  if (!selection.name) {
    return;
  }

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 5,
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

    bgGreen: {
      backgroundColor: "lime",
    },
  });

  const { checkIsSelected, toggleSelected } = useInfo();
  const router = useRouter();

  const isSelected = checkIsSelected(selection);

  const containerStyle = (style: any) => [
    style,
    isSelected ? styles.bgGreen : {},
  ];

  const handlePress = () => {
    toggleSelected(selection);
    router.push("/modal");
  };

  return (
    <Pressable style={containerStyle(styles.container)} onPress={handlePress}>
      <ThemedView style={containerStyle(styles.btnContainer)}>
        <ThemedText>{selection.name}</ThemedText>
        <ThemedText>{selection.price}</ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default SelectionButton;

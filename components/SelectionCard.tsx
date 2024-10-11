import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { SelectionFullType, useInfo } from "@/hooks/context/useInfo";
import { Pressable, StyleSheet } from "react-native";

interface SelectionCardProps {
  selection: SelectionFullType;
}

const SelectionCard = ({ selection }: SelectionCardProps) => {
  const { removeFromList } = useInfo();

  const handlePress = () => {
    removeFromList(selection);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{`${selection.name} ${selection.type}`}</ThemedText>
      <ThemedText style={styles.price}>{selection.price}</ThemedText>

      <Pressable onPress={handlePress}>
        <ThemedView
          style={styles.btnContainer}
          lightColor="grey"
          darkColor="grey"
        >
          <ThemedText lightColor="white" darkColor="white">
            Delete
          </ThemedText>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderBottomWidth: 2,
    borderStyle: "solid",
    padding: 20,
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 25,
  },
  btnContainer: {
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default SelectionCard;

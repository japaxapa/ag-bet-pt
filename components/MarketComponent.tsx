import React from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { MarketType } from "@/types/types";
import { ThemedText } from "./ThemedText";
import SelectionButton from "./SelectionButton";

interface MarketComponentProps {
  market: MarketType;
}

function formatTitle(str: string): string {
  if (!str) {
    return "";
  }

  const split = str.split(" ");
  split.shift();

  const title = split.join(" ");

  if (!title.includes("Win")) {
    return title;
  } else {
    const splittedTitle = title.split(" ");
    return splittedTitle[0].concat(" ", splittedTitle[1].toUpperCase());
  }
}

const MarketComponent = ({ market }: MarketComponentProps) => {
  if (!market.selections) {
    return;
  }

  const title = formatTitle(market.name);

  return (
    <ThemedView style={[styles.border, styles.container]}>
      <ThemedText style={styles.title}>{title}</ThemedText>

      <ThemedView style={styles.btnContainer}>
        {market.selections.map((selection) => (
          <SelectionButton
            key={`${market.id}-${selection.name}`}
            selection={{ ...selection, type: title }}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    width: "100%",
  },

  border: { borderColor: "grey", borderWidth: 2, borderStyle: "solid" },

  title: {
    paddingVertical: 10,
  },

  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default MarketComponent;

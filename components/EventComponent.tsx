import React from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { EventType } from "@/types/types";
import { ThemedText } from "./ThemedText";
import MarketComponent from "./MarketComponent";

interface EventComponentProps {
  event: EventType;
}

const EventComponent = ({ event }: EventComponentProps) => {
  if (!event.markets.length) {
    return;
  }

  const titles = event.name.split(" vs ");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.border, styles.title]}>
        <ThemedText style={styles.bold}>{titles[0]}</ThemedText>
        <ThemedText style={styles.bold}>vs</ThemedText>
        <ThemedText style={styles.bold}>{titles[1]}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.marketContainer}>
        {event.markets.map((market) => (
          <MarketComponent key={`${event.id}-${market.name}`} market={market} />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },

  border: { borderColor: "grey", borderWidth: 2, borderStyle: "solid" },

  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    padding: 20,
  },

  bold: {
    fontWeight: "bold",
  },

  marketContainer: {
    width: "100%",
  },
});

export default EventComponent;

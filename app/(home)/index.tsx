import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import MenuBar from "@/components/MenuBar";
import { Data } from "@/constants/Data";
import EventComponent from "@/components/EventComponent";

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <MenuBar />
      <ThemedView style={styles.margin}>
        {Data.map((event) => (
          <EventComponent key={`${event.id}-${event.name}`} event={event} />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: 60,
  },
  margin: {
    marginTop: 20,
    width: "100%",
  },
});

export default HomeScreen;

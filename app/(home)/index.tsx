import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import MenuBar from "@/components/MenuBar";
import { Data } from "@/constants/Data";
import EventComponent from "@/components/EventComponent";

const HomeScreen = () => {
  return (
    <ThemedView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <ThemedView style={styles.container}>
        <MenuBar />
        <ThemedView style={styles.margin}>
          {Data.map((event) => (
            <EventComponent key={`${event.id}-${event.name}`} event={event} />
          ))}
        </ThemedView>
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
    width: "100%",
    maxWidth: 500,
  },
  margin: {
    marginTop: 20,
    width: "100%",
  },
});

export default HomeScreen;

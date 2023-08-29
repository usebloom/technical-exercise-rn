import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import workoutStreakData from "./workoutStreakData.json";
import moment from "moment";

const SevenDayStreakComponent = () => {
  const [isPerfectWeek, setIsPerfectWeek] = useState(false);
  const streakData = workoutStreakData.streak.length;

  const checkIfPerfectWeek = () => {
    if (streakData >= 7) {
      setIsPerfectWeek(true);
    } else {
      setIsPerfectWeek(false);
    }
  };

  const imageSource =
    isPerfectWeek === true
      ? require("../../assets/flame.png")
      : require("../../assets/badge.png");

  useEffect(() => {
    checkIfPerfectWeek();
  }, []);

  const renderStreakItem = ({ item }) => {
    return (
      <View style={styles.streakContainer}>
        <View>
          <Image source={imageSource} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.streakRow}>
        {workoutStreakData.streak.map((item) => renderStreakItem({ item }))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: "100%",
    backgroundColor: "black",
  },
  streakText: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  streakContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  streakRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageBox: {
    width: 30,
    height: 30,
    backgroundColor: "white",
  },
});

export default SevenDayStreakComponent;

import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Header from "./components/Header";
import { waterData } from "../data";
const HomeScreen = () => {
  const [filled, setFilled] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"yyyy MM"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        renderArrow={(direction) => (
          <EvilIcons name="arrow-right" size={24} color="black" />
        )}
        firstDay={1}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {
          /*Return JSX*/
        }}
        enableSwipeMonths={true}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {waterData.map((item, index) => {
          return (
            <MaterialCommunityIcons
              name="glass-pint-outline"
              size={40}
              color="black"
              style={styles.iconStyles}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  iconStyles: {
    flexBasis: "20%",
    padding: 10,
  },
});

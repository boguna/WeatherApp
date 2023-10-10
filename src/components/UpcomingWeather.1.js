import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { Item, styles, DATA } from "./UpcomingWeather";

export const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.conteiner}>
      <Text>UpcomingWeather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

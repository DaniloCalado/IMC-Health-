import React from "react";
import { View } from "react-native";
import Main from './components/Main';
import Title from './components/Title'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title />
      <Main />
    </View>
  );
}

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultIMC(props: any) {
  return (
    <View style={styles.container}>
      <Text>{props.messengeResultIMC}</Text>
      <Text>{props.resultIMC}</Text>
      <Text>{props.classification}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
  },
});


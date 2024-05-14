import React from 'react';
import { Text, View, StyleSheet } from "react-native";

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>IMC Health</Text>       
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200, 
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

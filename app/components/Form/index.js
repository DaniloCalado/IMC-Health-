import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import ResultIMC from "./ResultIMC";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageResultIMC, setMessageResultIMC] = useState('Preencha o peso e a altura');
  const [resultIMC, setResultIMC] = useState(null);
  const [classification, setClassification] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  function IMCCalculator() {
    setHeight(null);
    setWeight(null);
    const numericHeight = height !== null ? parseFloat(height.toString().replace(',', '.')) : null;
    if (numericHeight !== null && numericHeight !== 0 && weight !== null) {
      const bmi = (weight / (numericHeight * numericHeight)).toFixed(2);
      const classification = setMessageClassification(bmi);
      setClassification(classification);
      
    } else {
      setResultIMC(null);
      setMessageResultIMC("Altura inválida ou não preenchida.");
    }
  }
  
  

  function setMessageClassification(bmi) {
    const bmiFloat = parseFloat(bmi);
    if (bmiFloat < 18.5) {
      setMessageResultIMC(`Seu IMC é igual a ${bmi}, o que significa que você está com MAGREZA.`);
    } else if (bmiFloat >= 18.5 && bmiFloat <= 24.9) {
      setMessageResultIMC(`Seu IMC é igual a ${bmi}, o que significa que você está com NORMAL.`);
    } else if (bmiFloat >= 25.0 && bmiFloat <= 29.9) {
      setMessageResultIMC(`Seu IMC é igual a ${bmi}, o que significa que você está com SOBREPESO (Obesidade Grau I).`);
    } else if (bmiFloat >= 30.0 && bmiFloat <= 39.9) {
      setMessageResultIMC(`Seu IMC é igual a ${bmi}, o que significa que você está com OBESIDADE (Obesidade Grau II).`);
    } else {
      setMessageResultIMC(`Seu IMC é igual a ${bmi}, o que significa que você está com OBESIDADE GRAVE (Obesidade Grau III).`);
    }
  }


  function ValidatorIMC() {
    if (weight != null || height != null) {
      IMCCalculator();     
      setTextButton("Calcular Novamente")
      return
    }
    setResultIMC(null);
    setTextButton("Calcular");
    setMessageResultIMC("Preencha o peso e a altura")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View>
          <Text>Altura (em metros)</Text>
          <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="ex.: Altura 1,70" keyboardType="numeric" />
          <Text>Peso (em kg)</Text>
          <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="ex.: Peso 70" keyboardType="numeric" />
          <Button onPress={() => ValidatorIMC()} title={textButton} />
        </View>
        <ResultIMC messengeResultIMC={messageResultIMC} resultIMC={resultIMC} classification={classification} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  container: {
    flexGrow: 1,
    justifyContent: "start",
    paddingHorizontal: 90,
    paddingTop: 20,
  },
});

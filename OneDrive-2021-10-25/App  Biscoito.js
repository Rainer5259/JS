import react from 'react';
import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList, TouchableHighlight, SafeAreaView } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import styles from './styles';

function App() {

  const [input, setInput] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [shouldShow, setshouldShow] = React.useState(true);
  const [amount, setAmount] = React.useState(null)
  function show() {
    let calculateInterest = (5.31 * input) / 100
    let valueWithInterest = parseFloat(input) - parseFloat(calculateInterest)
    setResult(valueWithInterest)

  }
  function calculaJuros(){
      //usar switch case
    let naHora = 5.31
    let vezes = [
      {
       0: 4.60,
       1: 5.98,
       2: 6.76,
       3: 8.45,
       4: 10.14,
       5: 10.43,
       6: 11.92,
       7: 13.41,
       8: 14.90,
       9: 16.39,
       10: 17.88,
      
      }
    ]
   switch (naHora, vezes) {
     case 1: naHora
     case 2: (vezes[0] + naHora * input) / 100
     case 3: (vezes[1] + naHora * input) / 100
     case 4: (vezes[2] + naHora * input) / 100 
     case 5: (vezes[3] + naHora * input) / 100
     case 6: (vezes[4] + naHora * input) / 100
     case 7: (vezes[5] + naHora * input) / 100
     case 8: (vezes[6] + naHora * input) / 100
     case 9: (vezes[7] + naHora * input) / 100
     case 10: (vezes[8] + naHora * input) / 100
     case 11: (vezes[9] + naHora * input) / 100
     case 12: (vezes[10] + naHora * input) / 100

   }
  }
  return (

    <SafeAreaView style={{ flex: 1 }}>

     <View style={styles.container}>

     <View style={styles.windowReturn}>
          <Text style={styles.windowText}> {result.toFixed(2)} </Text>

        </View>

        <View style={styles.viewPositionItems}>
          <Text> Selecione o número de parcelas </Text>
          <Picker
          selectedValue={input}
          onValueChange={(itemValue) =>  
            setInput(itemValue)
          }>
          <Picker.Item label="1x" value={1} />
          <Picker.Item label="2x" value={2} />
          <Picker.Item label="3x" value={3} />
          <Picker.Item label="4x" value={4} />
          <Picker.Item label="5x" value={5} />
          <Picker.Item label="6x" value={6} />
          <Picker.Item label="7x" value={7} />
          <Picker.Item label="8x" value={8} />
          <Picker.Item label="9x" value={9} />
          <Picker.Item label="10x" value={10} />
          <Picker.Item label="11x" value={11} />
          <Picker.Item label="12x" value={12} />

        </Picker>
          <TextInput style={styles.line}
            value={input[Number]}
            onChangeText={(value) => setInput(value)}
            placeholder={"Valor à pagar"}
            placeholderTextColor={'#8AD7FF'}
            keyboardType={'numeric'}

          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={show}

          >
            <Text style={styles.textButton}>Confirm</Text>
          </TouchableOpacity>


        </View>

      </View>
    </SafeAreaView>
  );
}


export { App };
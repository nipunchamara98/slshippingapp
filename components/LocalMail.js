import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LocalMail = () => {
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');

  const calculatePrice = () => {
    let calculatedPrice = 0;
    const weightInGrams = parseFloat(weight);

    if (weightInGrams <= 50) {
      calculatedPrice = 15;
    } else if (weightInGrams <= 100) {
      calculatedPrice = 20;
    } else if (weightInGrams <= 250) {
      calculatedPrice = 25;
    } else if (weightInGrams <= 500) {
      calculatedPrice = 30;
    } else if (weightInGrams <= 1000) {
      calculatedPrice = 35;
    } else {
      calculatedPrice = 35 + Math.ceil((weightInGrams - 1000) / 500) * 10;
    }

    setPrice(calculatedPrice.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (g)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Button title="Calculate Price" onPress={calculatePrice} />
      {price !== '' && <Text style={styles.result}>Price: {price} LKR</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default LocalMail;

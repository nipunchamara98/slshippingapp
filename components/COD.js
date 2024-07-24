import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const COD = () => {
  const [weight, setWeight] = useState('');
  const [codCharge, setCODCharge] = useState(0);

  const calculateCODCharge = () => {
    let calculatedCODCharge = 0;
    const parsedWeight = parseFloat(weight);

    if (parsedWeight > 0 && parsedWeight < 250) {
      calculatedCODCharge = 200.00;
    } else if (parsedWeight >= 250 && parsedWeight < 500) {
      calculatedCODCharge = 250.00;
    } else if (parsedWeight >= 500 && parsedWeight < 1000) {
      calculatedCODCharge = 350.00;
    } else if (parsedWeight >= 1000 && parsedWeight < 2000) {
      calculatedCODCharge = 400.00;
    } else if (parsedWeight >= 2000 && parsedWeight < 3000) {
      calculatedCODCharge = 450.00;
    } else if (parsedWeight >= 3000 && parsedWeight < 4000) {
      calculatedCODCharge = 500.00;
    } else if (parsedWeight >= 4000 && parsedWeight < 5000) {
      calculatedCODCharge = 550.00;
    } else if (parsedWeight >= 5000 && parsedWeight < 6000) {
      calculatedCODCharge = 600.00;
    } else if (parsedWeight >= 6000 && parsedWeight < 7000) {
      calculatedCODCharge = 650.00;
    } else if (parsedWeight >= 7000 && parsedWeight < 8000) {
      calculatedCODCharge = 700.00;
    } else if (parsedWeight >= 8000 && parsedWeight < 9000) {
      calculatedCODCharge = 750.00;
    } else if (parsedWeight >= 9000 && parsedWeight < 10000) {
      calculatedCODCharge = 800.00;
    } else if (parsedWeight >= 10000 && parsedWeight < 15000) {
      calculatedCODCharge = 850.00;
    } else if (parsedWeight >= 15000 && parsedWeight < 20000) {
      calculatedCODCharge = 1100.00;
    } else if (parsedWeight >= 20000 && parsedWeight < 25000) {
      calculatedCODCharge = 1600.00;
    } else if (parsedWeight >= 25000 && parsedWeight < 30000) {
      calculatedCODCharge = 2100.00;
    } else if (parsedWeight >= 30000 && parsedWeight < 35000) {
      calculatedCODCharge = 2600.00;
    } else if (parsedWeight >= 35000 && parsedWeight < 40000) {
      calculatedCODCharge = 3100.00;
    }

    setCODCharge(calculatedCODCharge.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash on Delivery (COD) Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (g)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Button title="Calculate COD Charge" onPress={calculateCODCharge} />
      {codCharge > 0 && (
        <Text style={styles.result}>COD Charge: {codCharge} LKR</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default COD;

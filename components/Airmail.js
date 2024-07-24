import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const countries = [
  { id: 1, name: 'USA' },
  { id: 2, name: 'UK' },
  { id: 3, name: 'Canada' },
  { id: 4, name: 'Australia' },
  { id: 5, name: 'Germany' },
  { id: 6, name: 'France' },
  { id: 7, name: 'Italy' },
  { id: 8, name: 'Japan' },
  { id: 9, name: 'China' },
  { id: 10, name: 'Brazil' },
  { id: 11, name: 'India' },
  { id: 12, name: 'Russia' },
  { id: 13, name: 'Mexico' },
  { id: 14, name: 'South Africa' },
  { id: 15, name: 'Argentina' },
  { id: 16, name: 'Spain' },
  { id: 17, name: 'Sweden' },
  { id: 18, name: 'Switzerland' },
  { id: 19, name: 'Netherlands' },
  { id: 20, name: 'New Zealand' },
];

const Airmail = () => {
  const [weight, setWeight] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry.name);
    setSuggestions([]);
  };

  const calculatePrice = () => {
    let basePrice = 0;

    switch (country.toLowerCase()) {
      case 'usa':
        basePrice = parseFloat(weight) <= 500 ? 500 : 500 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'uk':
        basePrice = parseFloat(weight) <= 500 ? 600 : 600 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'canada':
        basePrice = parseFloat(weight) <= 500 ? 700 : 700 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'australia':
        basePrice = parseFloat(weight) <= 500 ? 800 : 800 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'germany':
        basePrice = parseFloat(weight) <= 500 ? 900 : 900 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'france':
        basePrice = parseFloat(weight) <= 500 ? 1000 : 1000 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'italy':
        basePrice = parseFloat(weight) <= 500 ? 1100 : 1100 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'japan':
        basePrice = parseFloat(weight) <= 500 ? 1200 : 1200 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'china':
        basePrice = parseFloat(weight) <= 500 ? 1300 : 1300 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'brazil':
        basePrice = parseFloat(weight) <= 500 ? 1400 : 1400 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'india':
        basePrice = parseFloat(weight) <= 500 ? 1500 : 1500 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'russia':
        basePrice = parseFloat(weight) <= 500 ? 1600 : 1600 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'mexico':
        basePrice = parseFloat(weight) <= 500 ? 1700 : 1700 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'south africa':
        basePrice = parseFloat(weight) <= 500 ? 1800 : 1800 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'argentina':
        basePrice = parseFloat(weight) <= 500 ? 1900 : 1900 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'spain':
        basePrice = parseFloat(weight) <= 500 ? 2000 : 2000 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'sweden':
        basePrice = parseFloat(weight) <= 500 ? 2100 : 2100 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'switzerland':
        basePrice = parseFloat(weight) <= 500 ? 2200 : 2200 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'netherlands':
        basePrice = parseFloat(weight) <= 500 ? 2300 : 2300 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      case 'new zealand':
        basePrice = parseFloat(weight) <= 500 ? 2400 : 2400 + Math.ceil((parseFloat(weight) - 500) / 500) * 100;
        break;
      default:
        alert('Please enter a valid country (e.g., USA, UK, Canada)');
        return;
    }

    setPrice(basePrice.toFixed(2));
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSelectCountry(item)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Airmail</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (g)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter country"
        value={country}
        onChangeText={setCountry}
      />
      <FlatList
        data={countries.filter(item => item.name.toLowerCase().includes(country.toLowerCase()))}
        renderItem={renderCountryItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.autocompleteContainer}
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
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  autocompleteContainer: {
    width: '80%',
    maxHeight: 150,
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Airmail;

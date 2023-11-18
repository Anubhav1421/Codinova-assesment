import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AddEmployee = () => {
  const navigation = useNavigation()
  
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const [salary, setSalary] = useState(null)



  const saveData = async () => {
    try {
      // Save user responses to AsyncStorage
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('lastName', lastName);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('jobTitle', jobTitle);
      await AsyncStorage.setItem('salary', salary);
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };



  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, }}>
        <Text style={{ color: '#7cfc00', fontSize: 20, fontWeight: 'bold' }}>Enter employee details</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.Text}>First Name</Text>
        <TextInput
          style={styles.textInput}
          value={firstName}
          keyboardType={'ascii-capable'}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.Text}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.Text}>Email </Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.Text}>Job title</Text>
        <TextInput
          style={styles.textInput}
          value={jobTitle}
          onChangeText={(text) => setJobTitle(text)}
        />
        <Text style={styles.Text}>Salary</Text>
        <TextInput
          style={styles.textInput}
          value={salary}
          onChangeText={(text) => setSalary(text)}
        />
        <Button title="Save" onPress={() => {
          saveData();
          if (firstName != null && lastName != null && email != null && jobTitle != null && salary!=null) {
            navigation.navigate('DetailScreen')
          }else{
            alert('Please fill all the fields')
          }
        }}
          color={'#7cfc00'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  Button: {
    width: '80%',
  },
  Text: {
    fontSize: 16,

  },
  textInput: {
    marginBottom: 25,
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    borderBottomColor: 'green'
  }
});


export default AddEmployee;


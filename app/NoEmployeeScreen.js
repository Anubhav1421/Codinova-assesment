import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default NoEmployee = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);

    // Add functions to add employees to the state
    const handleAddEmployee = () => {
        // Implement the logic to add an employee to the state
        // const newEmployee = /* Your employee object or data */;
        setEmployees([newEmployee, ...employees]);
    };

    // ...

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen' }}>
                <Button title="Add Employee"
                    onPress={() => {
                       navigation.navigate('DemoScreen')
                    }}
                    color="green"
                />
            </View>
        </View>
    );
}

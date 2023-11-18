import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const DetailScreen = ({ }) => {
    const navigation = useNavigation();
    // Sample employee data
    const employeeData = [
        { id: '1', firstName: 'John', lastName: 'Doe', jobTitle: 'Developer' },
        { id: '2', firstName: 'Jane', lastName: 'Smith', jobTitle: 'Designer' },
        // Add more employee data as needed
    ];

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (employeeId) => {
        if (favorites.includes(employeeId)) {
            setFavorites(favorites.filter((id) => id !== employeeId));
        } else {
            setFavorites([...favorites, employeeId]);
        }
    };

    const renderEmployeeCard = ({ item }) => {
        const isFavorite = favorites.includes(item.id);

        return (
            <View style={styles.container}>
                <Text>{`${item.firstName} ${item.lastName}`}</Text>
                <Text>{item.jobTitle}</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity onPress={() => toggleFavorite(item.id)}

                    >
                        <Icon name={'star'} size={30} color={isFavorite ? 'gold' : 'grey'} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={employeeData}
                keyExtractor={(item) => item.id}
                renderItem={renderEmployeeCard}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 26,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        backgroundColor:'#fff'
    }

});

export default DetailScreen;



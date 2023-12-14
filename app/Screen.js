import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default DemoScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            {/* ------------view 1 ----------------- */}
            <View style={styles.View1}>

                <Icon name='arrowleft' size={30} style={styles.icon} />

                <Text style={styles.headerText}>Home Screen</Text>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ fontSize: 20 }}>This is home screen</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    View1: {
        justifyContent: 'center',
        padding: 14,
        flexDirection: 'row',
        backgroundColor: '#fff',

    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',

    },
    icon: {
        position: 'absolute',
        left: 0,
        padding: 14,

    }
})

 // <View style={{ flex: 1 }}>
        //     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 13 }}>
        //         <Icon name="arrowleft" size={24} color="black" />
        //         <Text style={{ fontSize: 22, fontWeight: '500', color: '#000' }}>Home Screen</Text>

        //         <View style={{ width: 24 }} />

        //     </View>
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <Text style={{ fontSize: 18, color: '#000' }}>This is home screen</Text>

        //     </View>

        // </View>










import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/core';
import { UIActivityIndicator } from 'react-native-indicators';
import styles from './styles';
import {userEmail} from '../LoginPage'

export default function Profile({navigation}){
    return(
        <View style={styles.container} >
            <Card style={styles.cardProfile}>
                <Text>Olá {userEmail}</Text>
            </Card>

            <Card style={styles.cardOptions}>

            </Card>
        </View>
    );
}
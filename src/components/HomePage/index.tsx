import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';
import styles from './styles'
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/core';
import { UIActivityIndicator } from 'react-native-indicators';
import { userEmail } from '../LoginPage';


export default function HomePage({navigation}){

    

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        const response = await axios.get('http://192.168.0.4:3000/user?'+userEmail);
        setData(response);
        setLoading(false);
        console.log(response);
        console.log('email');
      }

    useFocusEffect(
        React.useCallback(() => {     
          setLoading(true); 
          fetchData();
        }, []),
      );


    return(
    <View style={styles.container}>
        { !loading && data !== null && (
            <><Card style={styles.titleview}>
                    <Text style={styles.texto}>Olá, {data[0].name} :)</Text>
                </Card>
                    <Card style={styles.mainview}>
                        <Text style={styles.titleText}>Teste</Text>
                    </Card></>
        )}
        { loading && (<UIActivityIndicator color='rgb(41, 201, 161)' />)}

        
    </View>
    );
}
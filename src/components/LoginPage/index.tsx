import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

export var userEmail;

export default function LoginPage({navigation}){

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const [offset] = useState(new Animated.ValueXY({x:0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
  
    useEffect(()=> {
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 0,
          speed: 4,
          bounciness: 20,
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        })
      ]).start();  
    }, [])

    const login = () => {
      navigation.reset({
        index: 0,
        routes: [{
          name: "Principal",
        }]
      })
      userEmail = email.Text();
    }

    return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo}
        source={require('../../assets/logo.png')}
        />
      </View>

      <Animated.View 
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            {translateY: offset.y}
          ]
        }
      ]}
      >
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={(value)=> {setEmail(value)}}
        />
        
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={(value)=> {setPass(value)}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => {login();}}>
          <Text style={styles.submitText}>Acessar</Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>  
        </TouchableOpacity> 
      </Animated.View>
    </KeyboardAvoidingView>
    );
}
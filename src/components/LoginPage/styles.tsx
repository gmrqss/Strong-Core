import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#242424',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLogo:{
      justifyContent: 'center',
      flex: 1,
      alignContent: 'center'
    },
    logo:{
      height: "50%",
      //width: "50%",
      resizeMode: 'contain'
    },
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: "90%",
      paddingBottom: 130,
    },
    input:{
      backgroundColor: '#FFF',
      width: "90%",
      marginBottom: 15,
      color: "#222",
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    btnSubmit:{
      backgroundColor: 'rgb(41, 201, 161)',
      width: "90%",
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },
    submitText:{
      color: '#FFF',
      fontSize: 18
    },
    btnRegister:{
      marginTop: 10,
    },
    registerText:{
      color: "#fff",
    },
  });

  export default styles;
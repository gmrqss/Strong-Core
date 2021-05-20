import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    texto:{
        color: 'black',
        textAlign: 'left',
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '7%'
    },
    container:{
        flex:1,
        alignContent: 'center',
    },
    mainview:{
        flex: 7,
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 10,
        elevation: 7
    },
    titleview:{
        flex: 1,
        margin: 10,
        borderRadius: 15,
        elevation: 7
    },
    titleText:{
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30
    },
});

export default styles;
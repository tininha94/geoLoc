import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login__form: {
      width: "80%"
    },
    login__icon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16, 
      marginBottom: 100
    },
    register__icon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16, 
      marginBottom: 0
    },
    login__button: {
      fontSize: 19,
      alignItems: 'center',
      backgroundColor: '#ed8777',
      borderRadius: 100,
      padding: 10,
      width: 310,
      marginTop: 1,
      marginBottom: 5,
    },
    login__text: {
      fontSize: 15,
      color: 'white',
      alignItems: 'center'
    },
    login__input: {
      fontSize: 19,
      padding: 7,
      width: 310,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: '#e3dcdc',
      borderStyle: 'solid',
      borderWidth: 2
    },
    login__input_err: {
      fontSize: 19,
      padding: 7,
      width: 310,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 2
    },
      signup__button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      borderRadius: 100,
      padding: 10,
      width: 300,
      marginTop: 16,
    },
    signup__msg: {
      alignItems: 'center'
    },
    signup__text: {
      fontSize: 15,
      color: '#858181',
      alignItems: 'center'
    },
    register__text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#ed8777',
      alignItems: 'center',
      marginBottom: 70
    },
  });

  export {styles}
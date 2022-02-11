import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginIcon: {
      alignItems: 'center',
      padding: 5,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 300,
      marginTop: 16,
    },
    login__msg:(text='none')=>({
      fontSize: 22,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      padding: 15,
      display: text
    })
  });

  export {styles}
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    teste: {
      color: 'black'
    },
    login__form: {
      width: "80%"
    },
    login__icon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16, 
      marginBottom: 0
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
    register__tracking__code__input: {
      color:'black',
      fontSize: 17,
      color: 'gray',
      padding: 7,
      width: 310,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: '#e3dcdc',
      borderStyle: 'solid',
      borderWidth: 2
    },
    register__code__input: {
      justifyContent: 'center',
      fontSize: 17,
      padding: 7,
      width: 310,
      height:45,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: '#e3dcdc',
      borderStyle: 'solid',
      borderWidth: 2
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
    track__text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#ed8777',
      alignItems: 'center',
      marginBottom: 20
    },
    home__input_err: {
      fontSize: 19,
      padding: 7,
      width: 310,
      height: 100,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 2
    },
    home__input: {
      fontSize: 19,
      padding: 7,
      width: 310,
      height: 100,
      marginBottom: 15,
      borderRadius: 25,
      borderColor: '#e3dcdc',
      borderStyle: 'solid',
      borderWidth: 2
    },
    track__button: {
      alignItems: 'center',
      backgroundColor: '#ed8777',
      borderRadius: 100,
      padding: 10,
      width: 100,
    },
    track__form: {
      alignItems: 'center',
      width: "80%"
    },
    list__item: {
      backgroundColor: '#e8e8e8',
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: 25,
      marginRight: 25,
      marginTop:15
    },
    header:{
      backgroundColor: '#ed8777',
    },
    icon__code:{
      marginRight: 10,
    },
    header__code__table:{
      backgroundColor: '#ed8777',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      height: 50
    },
    header__text__code__table:{
      fontSize: 20,
      color: 'white',
      alignItems: 'center',
    },
    code__table:{
      flexDirection: 'column',
      justifyContent: 'center',
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      backgroundColor:'#e8e8e8',
      borderRadius: 10,
    },
    item__code__table:{ 
      width: '49%',
    },
    line__code__table:{
      height: '80%', 
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '0.2%',
      backgroundColor: '#909090'
    },
    horizontal__line__code__table:{
      height: 0.7, 
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#909090'
    },
    register__code__picker: {
      borderRadius: 25, 
      borderWidth: 2,
      height: 45,
      padding: 7,
      width: 310,
      marginBottom: 15,
      borderColor: '#e3dcdc',
      borderStyle: 'solid',
    },
    register__code__date__icon: {
      position: 'absolute',
      left: 5,
    },
  });

  export {styles}
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login({navigation}) {

  const [inavlid, setInavlid] = useState(false)
  const [login, setLogin] = useState('none')
  const [password, setPassword] = useState('none')
  const customInputStyle = inavlid ? styles.login__input_err : styles.login__input

  async function validateLogin() {
    let response = await fetch('http://192.168.0.104:3000/validateLogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        login: login,
        password: password
      })
    });

    let user = await response.json()

    if (user){
      inicializateSession(user.id)
    }else{
      setInvalidField()
    }
  }

  function inicializateSession(userId) {
      navigation.navigate('Menu', { userId: userId })
  }

  function setInvalidField() {
    setInavlid(true);
    setTimeout(() => {
      setInavlid(false);
    }, 3000);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

      <View style={styles.login__icon}>
        <Icon name="user" size={120} color={"#ed8777"}/>
      </View>
      <View>
        <Text style={styles.register__text}>Login</Text>
      </View>
      <View style={styles.login__form}>
        <TextInput style={customInputStyle} placeholder=' User' onChangeText={(text => setLogin(text))}/>
        <TextInput style={customInputStyle} placeholder=' Password' secureTextEntry={true} onChangeText={(text => setPassword(text))}/>
        <TouchableOpacity style={styles.login__button} onPress={() => validateLogin()}>
          <Text style={styles.login__text}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signup__msg} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signup__text}>Dont have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}



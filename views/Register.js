import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, PanResponder } from 'react-native';
import { styles } from '../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Register({ navigation }) {

      const[name, setName] = useState(null);
      const[login, setLogin] = useState(null);
      const[password, setPassword] = useState(null);
      const [inavlid, setInavlid] = useState(false)
      const customInputStyle = inavlid ? styles.login__input_err : styles.login__input

      async function sendForm(){
            let response = await fetch('http://192.168.0.106:3000/register',{
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        name: name,
                        login: login,
                        password: password
                  })
            });

            let resp = await response.json();
            
            if(resp == 'error'){
                  setInavlid(true);
                  setTimeout(() => {
                        setInavlid(false);
                  }, 3000);
            }else{
                  navigation.navigate('Login');
            }
      } 

      return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

                  <View>
                        <Icon style={styles.register__icon} name="user-plus" size={120} color={"#ed8777"} />
                  </View>
                  <View>
                        <Text style={styles.register__text}>Register</Text>
                  </View>

                  <View>
                        <TextInput placeholder=' Name' style={styles.login__input} onChangeText={(text=>setName(text))}/>
                        <TextInput placeholder=' Login' style={customInputStyle} onChangeText={(text => setLogin(text))}/>
                        <TextInput placeholder=' Password' style={styles.login__input} secureTextEntry={true} onChangeText={(text => setPassword(text))}/>
                        <TouchableOpacity style={styles.login__button} onPress={() => sendForm()}>
                              <Text style={styles.login__text}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signup__msg} onPress={() => navigation.navigate('Login')}>
                              <Text style={styles.signup__text}>Already have an account? Login</Text>
                        </TouchableOpacity>
                  </View>
            </KeyboardAvoidingView>
      );
}



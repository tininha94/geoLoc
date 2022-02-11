import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Register({ navigation }) {

      const[name, setName] = useState(null);
      const[login, setLogin] = useState(null);
      const[password, setPassword] = useState(null);

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
      } 

      return (
            <KeyboardAvoidingView>

                  <View>
                        <Icon style={styles.loginIcon} name="user-plus" size={90} />
                  </View>

                  <View>
                        <TextInput placeholder='Name' onChangeText={(text=>setName(text))}/>
                        <TextInput placeholder='Login' onChangeText={(text => setLogin(text))}/>
                        <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text => setPassword(text))}/>
                        <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                              <Text>Register</Text>
                        </TouchableOpacity>
                  </View>
            </KeyboardAvoidingView>
      );
}



import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login() {

  const [display, setDisplay] = useState('none')

  return (
    <KeyboardAvoidingView>

      <View>
        <Icon style={styles.loginIcon} name="user" size={90}/>
      </View>

      <View>
        <Text style={styles.login__msg(display)}>Invalid user or password</Text>
      </View>

      <View>
        <TextInput placeholder='User'/>
        <TextInput placeholder='Password' secureTextEntry={true}/>
        <TouchableOpacity style={styles.button} onPress={() => setDisplay('flex')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}



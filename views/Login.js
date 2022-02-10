import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login() {
  return (
    <KeyboardAvoidingView>

      <View>
        <Icon style={styles.loginIcon} name="user" size={90}/>
      </View>

      <View>
        <Text>Invalid user or password</Text>
      </View>

      <View>
        <TextInput placeholder='User'/>
        <TextInput placeholder='Password' secureTextEntry={true}/>
        <TouchableOpacity style={styles.button} /*onPress={() => navigation.navigate('Login')}*/>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}



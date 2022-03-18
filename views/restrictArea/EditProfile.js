import { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, PanResponder } from 'react-native';
import { styles } from '../../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function EditProfile(props) {

      const [user, setUser] = useState(props.route.params.user);
      const [name, setName] = useState(user.name);
      const [password, setPassword] = useState(user.password);

      async function teste() {
            let response = await fetch('http://192.168.0.104:3000/updateUserData', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        id: user.id,
                        name: name,
                        password: password
                  })
            });

            redirectToMenu()
      }

      async function redirectToMenu() {
            props.navigation.navigate('Menu', { userId: user.id })
      }

      return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

                  <View>
                        <Icon style={styles.register__icon} name="pencil" size={120} color={"#ed8777"} />
                  </View> 
                  <View>
                        <Text style={styles.register__text}>Settings</Text>
                  </View>

                  <View>
                        <TextInput placeholder=' Name' value={name} style={styles.login__input} onChangeText={(text => setName(text))} />
                        <TextInput placeholder=' Password' value={password} style={styles.login__input} secureTextEntry={true} onChangeText={(text => setPassword(text))} />
                        <TouchableOpacity style={styles.login__button} onPress={() => teste()}>
                              <Text style={styles.login__text}>Update</Text>
                        </TouchableOpacity>
                  </View>
            </KeyboardAvoidingView>
      );
}



import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import {styles} from '../assets/CSS/CSS';
import { useState } from 'react';

export default function Home({navigation}) {

  const [inavlid, setInavlid] = useState(false)
  const [code, setCode] = useState(null)
  const customInputStyle = inavlid ? styles.home__input_err : styles.home__input

  async function validateCode() {
    let response = await fetch('http://192.168.0.104:3000/getCodeDataByCode', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code
      })
    });
  
    let codeData = await response.json();
  
    if (codeData == 'not Found') {
      setInavlid(true);
      setTimeout(() => {
        setInavlid(false);
      }, 3000);
    } else {
      navigation.navigate('EditTrackingCode', { id: codeData.id })
    }
  } 


  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>

      <View>
        <Image source={require('../assets/logo.png')}/>
      </View>
      <View style={styles.track__form}>
        <TextInput placeholder=' Type here your tracking code' style={customInputStyle} onChangeText={(text => setCode(text))} />
        <TouchableOpacity style={styles.track__button} onPress={() => validateCode()}>
          <Text style={styles.login__text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}



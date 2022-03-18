import { useState, useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Picker } from 'react-native';
import { styles } from '../../../assets/CSS/CSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

export default function RegisterTrackingCode(props) {

      const [currentUserId, setcurrentUserId] = useState(props.route.params.userId);
      const [code, setCode] = useState(null);
      const [destiny, setDestiny] = useState(null);
      const [users, setUsers] = useState([])
      const [selectedUser, setSelectedUser] = useState("");
      const [date, setDate] = useState(new Date())

      useEffect(() => {
           generateRandomCode();
           getUsers(); 
      }, []);

      async function generateRandomCode() {
            let result = '';
            let length = 20;
            let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            let response = await fetch('http://192.168.0.104:3000/checkIfCodeAlreadyExists', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        code: result
                  }) 
            });

            let resp = await response.json()

            if (resp == 'success'){
                  setCode(result);
            }else{
                  this.generateRandomCode()
            }
      }
 
      async function getUsers() {
            let response = await fetch('http://192.168.0.104:3000/getUsers', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  }
            });

            let resp = await response.json()
            setUsers(resp)
      }

      function registerCode() {
            fetch('http://192.168.0.104:3000/registerCode', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        code: code,
                        userId: selectedUser,
                        date: date,
                        destiny: destiny
                  })
            });

            RedirectToMenu()
      }

      async function RedirectToMenu() {
            props.navigation.navigate('Menu', { userId: currentUserId })
      }

      return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                  <View>
                        <Icon name="codepen" size={120} color={"#ed8777"} />
                        <Text style={styles.register__text}>New Tracking Code</Text>
                  </View>
                  <View>
                        <TextInput editable={false} style={styles.register__tracking__code__input} value={code} />
                  </View>
                  <View style={styles.register__code__picker}>
                        <Picker
                              selectedValue={selectedUser}
                              style={{height: 25, width: 300}}
                              onValueChange={(itemValue) => {
                                    setSelectedUser(itemValue);
                              }}
                        >
                        {
                              users.map( (user) => {
                                    return <Picker.Item label={user.name} value={user.id}/>
                              })
                        }  
                        </Picker> 
                  </View>
                  <View>
                        <DatePicker
                              format='DD/MM/YYYY'
                              style={styles.register__code__input}
                              customStyles={{dateInput: { borderWidth: 0 }}}
                              date={date}
                              onDateChange={(data => setDate(data))}
                              iconComponent={
                                    <Icon
                                          size={25}
                                          color='#e3dcdc'
                                          name='calendar-o'
                                          style={styles.register__code__date__icon}
                                    />
                              }
                        />
                        <TextInput placeholder=' Destiny' style={styles.register__code__input} onChangeText={(text => setDestiny(text))} />
                        <TouchableOpacity style={styles.login__button} onPress={() => registerCode()}>
                              <Text style={styles.login__text}>Submit</Text>
                        </TouchableOpacity>
                  </View>
            </KeyboardAvoidingView>
      );
}



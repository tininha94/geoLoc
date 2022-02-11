import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,Button, Text, View } from 'react-native';
import styles from '../assets/CSS/CSS';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, RestrictArea, Register} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={({ navigation }) => ({
              headerTitle: "GEOLOC",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Icon name="user" size={30} color="#999" />
                </TouchableOpacity>
              )
            })}
          />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Area Restrita" component={RestrictArea} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



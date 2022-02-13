import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,Button, Text, View } from 'react-native';
import styles from '../assets/CSS/CSS';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Register} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestrictArea from './restrictArea/RestrictArea';

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
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="RestrictArea" component={RestrictArea} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



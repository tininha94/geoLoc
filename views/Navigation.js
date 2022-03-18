import 'react-native-gesture-handler';
import { TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Register, EditTrackingCode, RegisterTrackingCode } from './index';
import Menu from './restrictArea/Menu';
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
              headerStyle: {
                backgroundColor: '#ed8777'
              },
              headerTintColor: 'white',
              headerTitle: "",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Icon name="user" size={30} color="white" />
                </TouchableOpacity>
              )
            })}
          />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
        <Stack.Screen name="RegisterTrackingCode" options={{ headerShown: false }} component={RegisterTrackingCode} />
        <Stack.Screen name="EditTrackingCode" options={{ headerShown: false }} component={EditTrackingCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



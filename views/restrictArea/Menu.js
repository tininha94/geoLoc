import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { ListTrackingCodes, ListUsers, EditProfile} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../../assets/CSS/CSS";
import { useEffect, useState } from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
      return (
            <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                  <DrawerItem
                        label="Log out"
                        onPress={() => props.navigation.navigate('Home')}
                  />
            </DrawerContentScrollView>
      );
}

function MenuAdmin(props, user) {
      return (
            <Drawer.Navigator initialRouteName="ListTrackingCodes" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                  <Drawer.Screen
                        name="Tracking Codes"
                        component={ListTrackingCodes}
                        initialParams={{ user: user }}
                        options={{
                              headerStyle: {
                                    backgroundColor: '#ed8777'
                              },
                              headerTintColor: 'white',
                              headerRight: () => (
                                    <TouchableOpacity onPress={() => props.navigation.navigate('RegisterTrackingCode', {userId: user.id})}>
                                          <Icon name="plus-circle" style={styles.icon__code} size={25} color="white" />
                                    </TouchableOpacity>
                              )
                        }}
                  />
                  <Drawer.Screen
                        name="Users List"
                        component={ListUsers}
                        options={{
                              headerStyle: {
                                    backgroundColor: '#ed8777'
                              },
                              headerTintColor: 'white',
                        }}
                  />
                  <Drawer.Screen
                        name="Edit Profile"
                        component={EditProfile}
                        initialParams={{ user: user }}
                        options={{
                              headerStyle: { 
                                    backgroundColor: '#ed8777'
                              },
                              headerTintColor: 'white',
                        }}
                  />
            </Drawer.Navigator>

      ); 
}

function MenuUsers(props, user) {
      return (
            <Drawer.Navigator initialRouteName="ListTrackingCodes" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                  <Drawer.Screen
                        name="Tracking Codes"
                        component={ListTrackingCodes}
                        initialParams={{ user: user }}
                        options={{
                              headerStyle: {
                                    backgroundColor: '#ed8777'
                              },
                              headerTintColor: 'white'
                        }}
                  />
                  <Drawer.Screen
                        name="Edit Profile"
                        component={EditProfile}
                        initialParams={{ user: user }}
                        options={{
                              headerStyle: {
                                    backgroundColor: '#ed8777'
                              },
                              headerTintColor: 'white',
                        }}
                  />
            </Drawer.Navigator>

      );
}

export default function Menu(props) {

      const userId = props.route.params.userId
      const [user, setUser] = useState(null)
      
      useEffect(() => {
            getUserById();
      }, []);
      

      async function getUserById() {
            
            let response = await fetch('http://192.168.0.104:3000/getUserById', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        id: userId
                  })
            });
            
            let userData = await response.json()

            setUser(userData)
      }
      

      if(user != null){
      
            if (user.isAdmin) {
                  return (
                        MenuAdmin(props, user)
                        )
            } else {
                  return (
                        MenuUsers(props, user)
                  )
            } 

      }else{
            return(<Text>Loading</Text>)
      }

}
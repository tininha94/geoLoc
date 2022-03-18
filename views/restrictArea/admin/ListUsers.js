import React from 'react';
import {View, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../../../assets/CSS/CSS';
import { List } from 'react-native-paper';

export default function ListUsers() {

      const [tableData, setTableData] = useState([]);

      useEffect(() => {
            getUsers();
      }, []);

      async function getUsers() {

            let response = await fetch('http://192.168.0.104:3000/getUsers', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  }
            });

            let resp = await response.json()

            setTableData(resp)
      }

      return (
            <View>
                  <ScrollView>
                        {
                              tableData.map(data => {
                                    return <TouchableOpacity key={data.login} style={styles.list__item}>{
                                                <List.Item
                                                      title={data.name}
                                                      description={'Login: ' + data.login + '\n' + 'Register at: ' + data.createdAt}
                                                      left={props => <List.Icon icon="account" />}/>
                                                      }
                                          </TouchableOpacity>
                              })
                        }
                  </ScrollView>
            </View>
      );

}

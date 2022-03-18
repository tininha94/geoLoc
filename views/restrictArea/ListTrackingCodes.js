import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../../assets/CSS/CSS';
import { List } from 'react-native-paper';
import Moment from 'moment';

export default function ListTrackingCodes(props) {
      const [tableData, setTableData] = useState([]);
      const [user, setUser] = useState(props.route.params.user);
 
      useEffect(() => { 
            getTrackingCodesList();
      }, []);

      async function getTrackingCodesList() {

            let response = await fetch('http://192.168.0.104:3000/getCodesList', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json', 
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        userId: user.id,
                        admin: user.isAdmin
                  })
            }); 

            setTableData(await response.json())
      } 

      return (
            <View >
                  <ScrollView>
                        {
                              tableData.map(codeData =>{
                                    return <TouchableOpacity key={codeData.code} style={styles.list__item} onPress={() => props.navigation.navigate('EditTrackingCode', { id: codeData.id })}>{
                                          <List.Item
                                                
                                                title={codeData.code}
                                                description={'Destiny: ' + codeData.finalLocal + '\n' + 'Client: ' + codeData.User.name}
                                                left={props => <List.Icon icon="clipboard-text-outline" />}
                                                right={props => <Text>{Moment(codeData.deadline).subtract(10, 'days').calendar()}</Text>} />
                                          }
                                          </TouchableOpacity> 
                                    })

                        }
                  </ScrollView>
            </View>
      );

}

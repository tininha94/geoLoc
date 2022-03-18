import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../../assets/CSS/CSS';
import { List } from 'react-native-paper';
import Moment from 'moment';


function showTrackingCodeDetails(codeData){
      return (
            <View style={styles.code__table}>

                  <View style={styles.header__code__table}>
                        <Text style={styles.header__text__code__table}>Your order is on its way...</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                        <View style={styles.item__code__table}>
                              <List.Item title={'Tracking Code'} description={codeData.code} />
                        </View>
                        <View style={styles.line__code__table}></View>
                        <View style={styles.item__code__table}>
                              <List.Item title={'Client'} description={codeData.User.name} />
                        </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                        <View style={styles.item__code__table}>
                              <List.Item title={'Delivery Date'} description={Moment(codeData.deadline).subtract(10, 'days').calendar()} />
                        </View>
                        <View style={styles.line__code__table}></View>
                        <View style={styles.item__code__table}>
                              <List.Item title={'Destiny'} description={codeData.finalLocal} />
                        </View>
                  </View>
                  <View style={styles.horizontal__line__code__table} />
                  <View>
                        <List.Item
                              title={'Last Location'}
                              description={codeData.currentLocal}
                              left={props => <List.Icon icon="truck" />}
                        />
                  </View>
            </View>
      );
}


export default function EditTrackingCode(props) {
      const [codeData, setCodeData] = useState(null)
      
      useEffect(() => {
            getTrackingCodeDataById();
      }, []);

      async function getTrackingCodeDataById() {
            let response = await fetch('http://192.168.0.104:3000/getCodeDataById', {
                  method: 'POST',
                  headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        id: props.route.params.id
                  })
            })

            setCodeData(await response.json()) 
      };

      if (codeData != null) {
            return (
                  showTrackingCodeDetails(codeData)
            )
      } else {
            return (<Text>Loading</Text>)
      }

}

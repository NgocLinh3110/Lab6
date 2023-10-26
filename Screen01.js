import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Screen01( {navigate }) {

    const navigationScreen02 = useNavigation();
    const navigationToScreen02 = () => {
        navigationScreen02.navigate('chooseBike');
    }
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={styles.slogan}>A premium online store for sporter and their stylish choice</Text>
      </View>

      <View style={styles.style2}>
        <Image
          style={styles.sp1}
          source={require('./pic/bifour_-removebg-preview.png')}
        ></Image>
      </View>

      <View style={styles.style3}>
        <Text style={styles.name}>POWER BIKE SHOP</Text>
      </View>

      <View style={styles.style4}>
        <TouchableHighlight  onPress={navigationToScreen02}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style1:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style2:{
    flex: 3,
    backgroundColor: '#F7E5E4',
    width: '359px',
    borderRadius: '50px',
    height: '388px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style4:{
    flex: 1
  },
  slogan: {
    width: '351px',
    height: '87px',
    marginLeft: '12px',
    textAlign: 'center',
    fontFamily: 'VT323',
    fontSize: '26px',
    fontWeight: '400',
    lineHeight: '26px'
  },
  sp1: {
    width: '292px',
    height: '270px'
  },
  name:{
    width:'200px',
    height: '61px',
    fontFamily: 'Ubuntu',
    fontWeight: 700,
    fontSize: '26px',
    lineHeight: '30px',
    textAlign: 'center'
  },
  btn:{
    backgroundColor: '#E94141',
    width: '340px',
    height: '61px',
    borderRadius: '30px',
    alignItems: 'center'
  },
  btnText:{
    width: '207.49px',
    height: '27px',
    fontFamily: 'VT323',
    textAlign: 'center',
    fontSize: '27px',
    fontWeight: 400,
    lineHeight: '27px',
    marginTop: '15px',
    color: 'white'
  }
});

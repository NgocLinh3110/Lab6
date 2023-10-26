import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Screen02( {navigate }) {

    const navigationScreen03 = useNavigation();
    const navigationToScreen03 = () => {
        navigationScreen03.navigate('DetailBike', {item});
    }
    const data = [
        {
            id: 'sp1',
            name: 'Pinarello',
            price: '1800',
            img: require('./pic/bifour_-removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Mountain Bike',
        },
        {
            id: 'sp2',
            name: 'Pina Mountain',
            price: '1700',
            img: require('./pic/bione-removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp3',
            name: 'Pina Bike',
            price: '1500',
            img: require('./pic/bithree_removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp4',
            name: 'Pinarello',
            price: '1900',
            img: require('./pic/bitwo-removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp5',
            name: 'Pinarello',
            price: '2700',
            img: require('./pic/bithree_removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp6',
            name: 'Pinarello',
            price: '1350',
            img: require('./pic/bione-removebg-preview.png'),
            like: require('./pic/heart.png'),
            type: 'Road Bike',
        }
    ];
    const [filter, setFilter] = useState('All');
    const [filterData, setFilterData] = useState(data);

    const filterTheData = (filterType) =>{
        setFilter(filterType);
        if(filterType === 'All')
            setFilterData(data);
        else setFilterData(data.filter(item => item.type === filterType))
    };
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>The world’s Best Bike</Text>
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
  text1:{
    width: '255px',
    height: '29px',
    marginTop: '47px',
    marginLeft: '15px',
    fontFamily: 'Ubuntu',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '28.73px',
    textAlign: 'center'
  },

});

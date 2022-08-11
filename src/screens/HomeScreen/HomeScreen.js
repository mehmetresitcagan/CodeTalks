import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeScreen.style';
import Separator from '../../components/Separator/Separator';

import RoomCard from '../../components/RoomCard/RoomCard';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Odalar</Text>
      </View>
      <Separator />

      <RoomCard title={'Python'} />
    </View>
  );
};

export default HomeScreen;

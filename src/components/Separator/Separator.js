import {View, StyleSheet} from 'react-native';
import React from 'react';

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    margin: 10,
    borderBottomColor: '#a8a3ae',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Separator;

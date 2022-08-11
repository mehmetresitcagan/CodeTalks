import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff2df',
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 30,
    color: '#f47100',
  },
});

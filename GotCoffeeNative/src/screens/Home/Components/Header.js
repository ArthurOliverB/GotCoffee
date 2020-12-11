import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Container from '../../../template/Container';

const Header: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Icon color="#3c3744" name="shoppingcart" size={32} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default Header;

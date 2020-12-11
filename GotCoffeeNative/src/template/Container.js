import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container: () => React$Node = (props) => {
  return <View style={styles.componentWrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  componentWrapper: {
		padding: 16
  },
});

export default Container;
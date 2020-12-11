import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Container from '../../../template/Container';
const TitlePanel: () => React$Node = () => {
  return (
    <View style={styles.panelContainer}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Hello, Arthur!</Text>
      </View>
      <Text style={styles.subtitle}>What are we brewing today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    marginVertical: 16
  },
  title: {
    fontFamily: 'Commissioner-Bold',
    fontSize: 32,
    color: '#3c3744',
  },
  titleWrapper: {
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Commissioner-Regular',
    fontSize: 28,
    color: '#595266',
  },
});

export default TitlePanel;

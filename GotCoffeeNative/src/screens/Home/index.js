import React from 'react';
import Header from './Components/Header';
import ProductsLists from './Components/ProductsLists';
import TitlePanel from './Components/TitlePanel';
import {StyleSheet, ScrollView} from 'react-native';
import CategoriesList from './Components/CategoriesList';

const Home: () => React$Node = () => {
  return (
    <ScrollView style={styles.homeContainer}>
        <Header />
        <TitlePanel />
        <CategoriesList />
        <ProductsLists />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    height: '100%',
    padding: 16,
  },
});

export default Home;

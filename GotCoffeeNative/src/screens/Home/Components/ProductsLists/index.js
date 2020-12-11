import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';
import {StyleSheet, View, Text} from 'react-native';

const ProductsLists: () => React$Node = ({currentCategory}) => {
  return (
    <>
      <View style={styles.listsContainer}>
        <Text style={styles.title}>{currentCategory.categoryName}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listsContainer: {
    marginTop: 16,
    flex: 9,
  },
  title: {
    fontFamily: 'Commissioner-Bold',
    fontSize: 24,
    color: '#3c3744',
  },
});

const currentCategorySelector = (state) => state.categories.currentCategory;
const getCurrentCategoryFromState = createSelector(
  [currentCategorySelector],
  (currentCategory) => {
    return currentCategory;
  },
);

const categoryBeveragesSelector = (state) => state.categories.categoryBeverages;
const getCategoryBeveragesFromState = createSelector(
  [categoryBeveragesSelector],
  (categoryBeverages) => {
    return categoryBeverages;
  },
);

const mapStateToProps = (state) => ({
	currentCategory: getCurrentCategoryFromState(state),
	categoryBeverages: getCategoryBeveragesFromState(state)
});

export default connect(mapStateToProps, null)(ProductsLists);

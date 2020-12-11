import React, { useEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CategoryItem from './CategoryItem';
import { fetchCategoriesThunk, fetchBeveragesFromCategoryThunk } from '../../../redux/reducers/Categories';
import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit';

const CategoriesList: () => React$Node = (props) => {
  const renderItem = ({item}) => (
      <CategoryItem category={item}/>
	);
	
	useEffect(() => {
		props.fetchCategoriesThunk();
	}, [])
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.categories}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 16,
    marginHorizontal: -8,
		flex: 1,
  },
});

const categoriesSelector = (state) => state.categories;
const getCategoriesFromState = createSelector([categoriesSelector], (categories) => {
	return categories.categories;
});

const mapStateToProps = (state) => ({
	categories: getCategoriesFromState(state),
})

const mapDispatchToProps = {
	fetchCategoriesThunk,
	fetchBeveragesFromCategoryThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

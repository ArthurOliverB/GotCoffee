import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {currentCategoryChanged, fetchBeveragesFromCategoryThunk} from '../../../redux/reducers/Categories';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

	const CategoryItem: () => React$Node = ({currentCategoryChanged, fetchBeveragesFromCategoryThunk,category}) => {
	const handleOnPress = () => {
		currentCategoryChanged(category);
		fetchBeveragesFromCategoryThunk(category);
	}

	useEffect(() => {
	}, [])
  return (
    <TouchableOpacity onPress={e => handleOnPress()}>
      <View
        style={
          category.selected
            ? StyleSheet.compose(styles.categoryItem, {
                backgroundColor: '#62d660',
              })
            : StyleSheet.compose(styles.categoryItem, {
                backgroundColor: '#f5f5f5',
              })
        }>
        <Text
          style={
            category.selected
              ? StyleSheet.compose(styles.title, {color: '#ffffff'})
              : StyleSheet.compose(styles.title, {color: '#3c3744'})
          }>
          {category.categoryName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const activeStyle = () => {
  return StyleSheet.compose(styles.categoryItem, styles.active);
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 4,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Commissioner-Regular',
    fontSize: 20,
  },
});

const mapDispatchToProps = {
	currentCategoryChanged,
	fetchBeveragesFromCategoryThunk
};

export default connect(null, mapDispatchToProps)(CategoryItem);

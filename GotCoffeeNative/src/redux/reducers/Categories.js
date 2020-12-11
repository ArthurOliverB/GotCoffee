import {createSlice} from '@reduxjs/toolkit';
import CategoriesAPI from '../../api/categories.api';
import BeveragesAPI from '../../api/beverages.api';

const initialState = {
  currentCategory: '',
  categories: [],
  categoryBeverages: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    categoriesFetched: (state, action) => {
      return {
        ...state,
        categories: [...action.payload],
      };
    },
    currentCategoryChanged: (state, action) => {
      const newCategories = [...state.categories].map((category) => ({
        ...category,
        selected: false,
      }));
      newCategories.find(
        (category) => category.id === action.payload.id,
      ).selected = true;
      return {
        categories: newCategories,
        currentCategory: action.payload,
      };
    },
    beveragesFromCategoryFetched: (state, action) => {
      return {
        ...state,
        categoryBeverages: action.payload,
      };
    },
  },
});

export const fetchCategoriesThunk = () => {
  return (dispatch) => {
    CategoriesAPI.fetchCategories().then((snapshot) => {
      const parsedCategories = snapshot.docs.map((doc) => ({
        id: doc.id,
        selected: false,
        ...doc.data(),
      }));
      dispatch(categoriesFetched(parsedCategories));
			dispatch(currentCategoryChanged(parsedCategories[0]));
			// TODO: this looks nasty
      BeveragesAPI.fetchBeverageByCategory(parsedCategories[0].id).then((snapshot) => {
        const parsedBeverages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(parsedBeverages);
        dispatch(beveragesFromCategoryFetched(parsedBeverages));
      });
    });
  };
};

//TODO: for some reason i'm not able to fetch the beverages on mounted
// The only way for me to fetch the beverages is to select a category

export const fetchBeveragesFromCategoryThunk = (category) => {
  console.log('entrou fora');
  return (dispatch) => {
    console.log('entrou dentro');
    console.log(category.id);
    BeveragesAPI.fetchBeverageByCategory(category.id).then((snapshot) => {
      const parsedBeverages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(parsedBeverages);
      dispatch(beveragesFromCategoryFetched(parsedBeverages));
    });
  };
};
// TODO: Check wether exporting actions is required since i'll probably won't be using them
// at least not all of them
export const {
  categoriesFetched,
  currentCategoryChanged,
  beveragesFromCategoryFetched,
} = categorySlice.actions;
export default categorySlice.reducer;

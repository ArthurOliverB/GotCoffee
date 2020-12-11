import firestore from '../config/firebase';

const fetchCategories = () => firestore.collection('categories').get()

export default {
	fetchCategories
};
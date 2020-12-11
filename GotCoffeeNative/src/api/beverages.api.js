import firestore from '../config/firebase';

const fetchBeverageByCategory = (category) => {
  return firestore
    .collection('beverages')
    .where('category', '==', category)
    .get();
};

export default {
  fetchBeverageByCategory,
};

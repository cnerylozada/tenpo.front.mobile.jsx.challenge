import { fireStore } from "./firebase-config";

export const getRestaurants = () => {
  return fireStore
    .collection("restaurants")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
};

export const getCategories = () => {
  return fireStore
    .collection("categories")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
};

export const getFavorites = () => {
  return fireStore
    .collection("favorites")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
};

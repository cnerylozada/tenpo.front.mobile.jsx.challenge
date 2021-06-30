import { sortListByKey } from "../utils";
import { fireStore } from "./firebase-config";

export const getRestaurants = () => {
  return fireStore
    .collection("restaurants")
    .get()
    .then((_) => {
      const data = _.docs.map((item) => ({ id: item.id, ...item.data() }));
      return sortListByKey(data, "rating", "des");
    });
};

export const getRestaurantById = (id) => {
  return fireStore
    .collection("restaurants")
    .doc(id)
    .get()
    .then((_) => ({ id: _.id, ..._.data() }));
};

export const getCategories = () => {
  return fireStore
    .collection("categories")
    .get()
    .then((_) => {
      const data = _.docs.map((item) => ({ id: item.id, ...item.data() }));
      return sortListByKey(data, "name");
    });
};

export const getFavorites = async () => {
  const favorites = await fireStore
    .collection("favorites")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
  const restaurants = await getRestaurants();

  return favorites.map((_) => {
    const restaurant = restaurants.find((item) => item.id === _.restaurantId);
    return { ..._, restaurant };
  });
};

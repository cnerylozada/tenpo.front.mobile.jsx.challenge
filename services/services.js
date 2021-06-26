import { fireStore } from "./firebase-config";

export const getCategories = () => {
  return fireStore
    .collection("categories")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
};

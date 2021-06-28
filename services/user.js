import { fireStore } from "./firebase-config";

export const userInfo = () => {
  return fireStore
    .collection("user")
    .get()
    .then((_) => _.docs.map((item) => ({ id: item.id, ...item.data() })));
};

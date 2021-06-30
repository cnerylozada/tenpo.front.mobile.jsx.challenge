export const sortListByKey = (list, key) => {
  return list.sort((prevItem, nextItem) =>
    prevItem[key] > nextItem[key] ? 1 : nextItem[key] > prevItem[key] ? -1 : 0
  );
};

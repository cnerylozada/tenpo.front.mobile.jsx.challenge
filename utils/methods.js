export const sortListByKey = (list, key, typeOfSort = "asc") => {
  const response = list.sort((prevItem, nextItem) =>
    prevItem[key] > nextItem[key] ? 1 : nextItem[key] > prevItem[key] ? -1 : 0
  );
  return typeOfSort === "asc" ? response : response.reverse();
};

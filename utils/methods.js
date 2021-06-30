export const sortListByKey = (list, key) => {
  const compare = (a, b) => {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  };
  return list.sort(compare);
};

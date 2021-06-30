import {
  mockCategories,
  mockCategoriesSortedByName,
  mockRestaurants,
  mockRestaurantsSortedByRatingDesc,
  sortListByKey,
} from "../utils";

describe("testing sortListByKey", () => {
  it("should return categories sorted by name", () => {
    expect(sortListByKey(mockCategories, "name")).toEqual(
      mockCategoriesSortedByName
    );
    expect(sortListByKey(mockCategories, "name", "asc")).toEqual(
      mockCategoriesSortedByName
    );
  });
  it("should return restaurants sorted by rating in descending way", () => {
    expect(sortListByKey(mockRestaurants, "rating", "des")).toEqual(
      mockRestaurantsSortedByRatingDesc
    );
  });
});

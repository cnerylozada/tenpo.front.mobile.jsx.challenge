import {
  mockRestaurants,
  mockRestaurantsSorted,
  sortListByKey,
} from "../utils";

describe("qweqwe", () => {
  it("qwew", () => {
    expect(sortListByKey(mockRestaurants, "wewe")).toEqual(
      mockRestaurantsSorted
    );
  });
});

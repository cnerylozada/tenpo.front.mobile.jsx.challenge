import { mockCategories, mockCategoriesSorted, sortListByKey } from "../utils";

describe("testing sortListByKey", () => {
  it("should return categories sorted by name", () => {
    expect(sortListByKey(mockCategories, "name")).toEqual(mockCategoriesSorted);
  });
});

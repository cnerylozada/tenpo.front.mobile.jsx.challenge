import { getAvatarName } from "../utils";

describe("testing getAvatarName", () => {
  it("should return the first letter of the first name and last name", () => {
    const someUser = { names: "cristh gerardo", surnames: "nery lozada" };
    const otherUser = { names: "augusto", surnames: "torres" };
    expect(getAvatarName(someUser)).toBe("cn");
    expect(getAvatarName(otherUser)).toBe("at");
  });
});

const calculator = require("./calculator");

describe("calculator", () => {
  test("2 + 2", () => {
    expect(calculator("2+2=")).toBe(4);
  });
  test("24 + 2", () => {
    expect(calculator("24+2=")).toBe(26);
  });
  test("2 * 3", () => {
    expect(calculator("2 * 3=")).toBe(6);
  });
  test("23 * 2 - 30", () => {
    expect(calculator("23*2-30=")).toBe(16);
  });
  test("32 % 3", () => {
    expect(calculator("32 % 3 =")).toBe(2);
  });
  test("2 / 0", () => {
    expect(calculator("2/0=")).toBe("ERROR");
  });
});

const { hello } = require("./index.js");

describe("test my module", () => {
  test("my module says hello", () => {
    expect(hello).toBe("Hello");
  });
});

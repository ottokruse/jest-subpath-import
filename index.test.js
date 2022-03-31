const { JwtRsaVerifier } = require("aws-jwt-verify");
const { getVerifier } = require("./index.js");

describe("test aws-jwt-verify", () => {
  test("verifier is returned", () => {
    expect(getVerifier()).toBe(JwtRsaVerifier);
  });
});

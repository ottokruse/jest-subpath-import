const { JwtRsaVerifier } = require("aws-jwt-verify");

module.exports.getVerifier = () => JwtRsaVerifier;

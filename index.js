// Just having this require breaks jest (without additional config):
const {} = require("aws-jwt-verify");

const hello = "Hello";

module.exports = { hello };

if (require.main === module) {
  console.log(hello);
}

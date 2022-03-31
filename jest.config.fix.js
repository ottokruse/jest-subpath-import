module.exports = {
  // I don't like having to do this config.
  // This is an implementation detail of aws-jwt-verify
  // that I shouldn't have to know about
  moduleNameMapper: {
    "#node-web-compat": "./node-web-compat-node.js",
  },
};

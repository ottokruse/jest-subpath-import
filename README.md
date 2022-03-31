# Jest needs additional config for supporting modules that use subpath imports

Subpath imports ([link](https://nodejs.org/api/packages.html#subpath-imports)) were added to NodeJS in: v14.6.0, v12.19.0

However Jest does not support modules using subpath imports, unless jest users do additional config (e.g. specify a moduleNameMapper in their config).

# Steps to Reproduce

This example uses the NPM library `aws-jwt-verify`, which under the hood uses subpath imports (to support both Web and NodeJS from the same codebase).

1. Clone this repo: `git clone https://github.com/ottokruse/jest-subpath-import.git`
1. Install dependencies: `npm install`
1. Run jest: `npx jest`

Jest errors with this message:

```
 FAIL  ./index.test.js
  ● Test suite failed to run

    Cannot find module '#node-web-compat' from 'node_modules/aws-jwt-verify/dist/cjs/https.js'

    Require stack:
      node_modules/aws-jwt-verify/dist/cjs/https.js
      node_modules/aws-jwt-verify/dist/cjs/jwk.js
      node_modules/aws-jwt-verify/dist/cjs/jwt-rsa.js
      node_modules/aws-jwt-verify/dist/cjs/index.js
      index.test.js

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.283 s
Ran all test suites.
```

# Workaround

Jest works successfully if you specify a `moduleNameMapper` in the jest config:

`npx jest --config jest.config.fix.js`

Adding similar mapping logic to a custom resolver in jest would work too.

# Proof that this is not an issue in the used library itself

This runs perfectly and NodeJS is able to resolve the subpath import fine:

`node index.js`

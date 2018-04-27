// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mixin-schema.js.
import { name as packageName } from "meteor/cesarve:mixin-schema";

// Write your tests here!
// Here is an example.
Tinytest.add('mixin-schema - example', function (test) {
  test.equal(packageName, "mixin-schema");
});

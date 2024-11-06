var assert = require("assert");
var calculate = require("../app");

describe("Test add", () => {
  it("should return 2 when the values are 1 and 1", () => {
    assert.equal(calculate.add(1,1), 2);
  });
  it("should return 5 when the values are 2 and 3", () => {
    assert.equal(calculate.add(2,3), 5);
  });
});

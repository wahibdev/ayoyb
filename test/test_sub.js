var assert = require("assert");
var calculate = require("../app");

describe("Test sub", () => {
  it("should return 0 when the values are 1 and 1", () => {
    assert.equal(calculate.sub(1, 1), 0);
  });
  it("should return -1 when the values are 2 and 3", () => {
    assert.equal(calculate.sub(2, 3), -1);
  });
});

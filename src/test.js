const { chunk } = require("./index");
const { expect } = require("chai");

describe("tiny-chunk", () => {
  const arr = [1, 2, 3, 4, 5];
  it("should default to a chunk size of 1", () => {
    expect(chunk(arr)).to.deep.equal([[1], [2], [3], [4], [5]]);
  });
  it("should coerce negative chunk sizes to 1", () => {
    expect(chunk(arr, -1)).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, -Infinity)).to.deep.equal([[1], [2], [3], [4], [5]]);
  });
  it("should coerce non-numeric chunk sizes to 1", () => {
    expect(chunk(arr, NaN)).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, null)).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, "3")).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, [1, 2])).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, { foo: "bar" })).to.deep.equal([[1], [2], [3], [4], [5]]);
  });
  it("should round non-integers chunk sizes down to the next lower integer", () => {
    expect(chunk(arr, 0.99)).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, 1.99)).to.deep.equal([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, 2.01)).to.deep.equal([[1, 2], [3, 4], [5]]);
  });
  it("should place left over values in a trailing chunk", () => {
    expect(chunk(arr, 2)).to.deep.equal([[1, 2], [3, 4], [5]]);
    expect(chunk(arr, 3)).to.deep.equal([[1, 2, 3], [4, 5]]);
    expect(chunk(arr, 4)).to.deep.equal([[1, 2, 3, 4], [5]]);
  });
  it("should evenly chunk arrays when chunked by a divisor", () => {
    expect(chunk(arr, 5)).to.deep.equal([[1, 2, 3, 4, 5]]);
    expect(chunk(arr, 6)).to.deep.equal([[1, 2, 3, 4, 5]]);
    expect(chunk(arr, Infinity)).to.deep.equal([[1, 2, 3, 4, 5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).to.deep.equal([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
  });
});

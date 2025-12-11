const assert = require('chai').assert;
const filterGifts = require('.');

describe('challenge-1', function () {
    it('test #1 should return type', function () {
        const result = filterGifts();
        console.log(Array.isArray(result));
        assert.strictEqual(Array.isArray(result), true);
    });
    it("test #2 filterGifts(['car', 'doll#arm', 'ball', '#train'])", function () {
    const result = filterGifts(['car', 'doll#arm', 'ball', '#train']);
    assert.strictEqual(["car","ball"].toString(), result.toString());
  });
});
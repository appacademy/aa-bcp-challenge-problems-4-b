const assert = require('assert');

const arrayBuilder = require('../problems/1-array-builder.js');
const longestWord = require('../problems/2-longest-word.js');
const leastCommonMultiple = require('../problems/3-least-common-multiple.js');
const sillyCipher = require('../problems/4-silly-cipher.js');
const hipsterfy = require('../problems/5-hipsterfy.js');

describe('arrayBuilder()', function () {
  it('should return an array containing the appropriate number of elements based on the values of the object.', function () {
    const result1 = arrayBuilder({ cats: 2, dogs: 1 });
    const answer1 = ['cats', 'cats', 'dogs'];
    assert.deepStrictEqual(result1.sort(), answer1.sort());

    const result2 = arrayBuilder({ a: 3, b: 1, c: 1, d: 4 });
    const answer2 = ['a', 'a', 'a', 'b', 'c', 'd', 'd', 'd', 'd'];
    assert.deepStrictEqual(result2.sort(), answer2.sort());
  });
});

describe('longestWord()', function () {
  it('should return the longest word in the sentence', function () {
    assert.equal(longestWord('app academy is cool'), 'academy');
    assert.equal(longestWord('hate having hungry hippos'), 'hippos');
    assert.equal(longestWord('bootcamp'), 'bootcamp');
  });

  it('should return an empty string if the sentence is empty', function () {
    assert.equal(longestWord(''), '');
  });
});

describe('leastCommonMultiple()', function () {
  it('should return the lowest number which is a multiple of both inputs', function () {
    const result1 = leastCommonMultiple(2, 3);
    const result2 = leastCommonMultiple(6, 10);
    const result3 = leastCommonMultiple(24, 26);

    assert.equal(result1, 6);
    assert.equal(result2, 30);
    assert.equal(result3, 312);
  });
});

describe('sillyCipher()', function () {
  it('should return a string where characters are replaced with their corresponding value in the cipher', function () {
    const result = sillyCipher('apple', { a: 'c', p: 'x', l: 'r', e: 'o' });
    const expected = 'cxxro';
    assert.equal(result, expected);
  });

  it('should return a string where characters not in the cipher are replaced with a dot .', function () {
    const result1 = sillyCipher('apple', { a: 'c', p: 'x' });
    const expected1 = 'cxx..';
    assert.equal(result1, expected1);

    const result2 = sillyCipher('bootcamp prep?', { o: 'e', p: 'q', '?': '!' });
    const expected2 = '.ee....q.q..q!';
    assert.equal(result2, expected2);

    const result3 = sillyCipher('abc', {});
    const expected3 = '...';
    assert.equal(result3, expected3);
  });
});

describe('hipsterfy()', function () {
  it('should remove the last vowel from each word.', function () {
    const result1 = hipsterfy('proper tonic panther');
    const expected1 = 'propr tonc panthr';
    assert.equal(result1, expected1);

    const result2 = hipsterfy('towel flicker banana');
    const expected2 = 'towl flickr banan';
    assert.equal(result2, expected2);

    const result3 = hipsterfy('turtle cheeseburger fries');
    const expected3 = 'turtl cheeseburgr fris';
    assert.equal(result3, expected3);

    const result4 = hipsterfy('embrace thy end');
    const expected4 = 'embrac thy nd';
    assert.equal(result4, expected4);
  });
});

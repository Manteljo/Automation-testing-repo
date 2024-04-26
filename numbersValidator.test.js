const chai = require('chai');
const NumbersValidator = require('./NumbersValidator');

// Use chai's assert style
const assert = chai.assert;

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  describe('isNumberEven', () => {
    it('should return true if the number is even', () => {
      assert.isTrue(validator.isNumberEven(2));
    });

    it('should return false if the number is odd', () => {
      assert.isFalse(validator.isNumberEven(3));
    });

    it('should throw an error if the input is not a number', () => {
      assert.throw(() => validator.isNumberEven('not a number'), Error);
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [2, 4];
      assert.deepEqual(validator.getEvenNumbersFromArray(input), expected);
    });

    it('should throw an error if the input is not an array of numbers', () => {
      assert.throw(
        () => validator.getEvenNumbersFromArray(['not a number']),
        Error
      );
    });
  });

  describe('isAllNumbers', () => {
    it('should return true if all elements are numbers', () => {
      const input = [1, 2, 3];
      assert.isTrue(validator.isAllNumbers(input));
    });

    it('should return false if any element is not a number', () => {
      const input = [1, 'not a number', 3];
      assert.isFalse(validator.isAllNumbers(input));
    });

    it('should throw an error if the input is not an array', () => {
      assert.throw(() => validator.isAllNumbers('not an array'), Error);
    });
  });

  describe('isInteger', () => {
    it('should return true if the number is an integer', () => {
      assert.isTrue(validator.isInteger(1));
    });

    it('should return false if the number is not an integer', () => {
      assert.isFalse(validator.isInteger(1.5));
    });

    it('should throw an error if the input is not a number', () => {
      assert.throw(() => validator.isInteger('not a number'), Error);
    });
  });
});

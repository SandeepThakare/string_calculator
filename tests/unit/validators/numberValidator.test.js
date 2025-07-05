// tests/unit/validators/NumberValidator.test.js

const { NumberValidator } = require('../../../src/validators');

describe('NumberValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumberValidator();
  });

  describe('validate method', () => {
    test('should not throw for valid numbers', () => {
      expect(() => validator.validate([1, 2, 3])).not.toThrow();
      expect(() => validator.validate([0, 5, 10])).not.toThrow();
    });

    test('should throw for negative numbers', () => {
      expect(() => validator.validate([-1, 2, 3])).toThrow('negative numbers not allowed -1');
      expect(() => validator.validate([1, -2, 3])).toThrow('negative numbers not allowed -2');
    });

    test('should throw for multiple negative numbers', () => {
      expect(() => validator.validate([-1, 2, -3, 4, -5])).toThrow('negative numbers not allowed -1,-3,-5');
    });

    test('should handle empty array', () => {
      expect(() => validator.validate([])).not.toThrow();
    });
  });

  describe('validateNegativeNumbers method', () => {
    test('should not throw for positive numbers', () => {
      expect(() => validator.validateNegativeNumbers([1, 2, 3])).not.toThrow();
    });

    test('should throw for negative numbers', () => {
      expect(() => validator.validateNegativeNumbers([-1])).toThrow();
      expect(() => validator.validateNegativeNumbers([-1, -2])).toThrow();
    });
  });

  describe('findNegativeNumbers method', () => {
    test('should return empty array for positive numbers', () => {
      expect(validator.findNegativeNumbers([1, 2, 3])).toEqual([]);
    });

    test('should return negative numbers', () => {
      expect(validator.findNegativeNumbers([-1, 2, -3])).toEqual([-1, -3]);
      expect(validator.findNegativeNumbers([-5, -10, -15])).toEqual([-5, -10, -15]);
    });

    test('should handle zero', () => {
      expect(validator.findNegativeNumbers([0, 1, 2])).toEqual([]);
      expect(validator.findNegativeNumbers([-1, 0, 1])).toEqual([-1]);
    });
  });
});
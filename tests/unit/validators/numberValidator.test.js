const { NumberValidator } = require('../../../src/validators');

describe('NumberValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumberValidator();
  });

  test('should not throw for valid numbers', () => {
    expect(() => validator.validate([1, 2, 3])).not.toThrow();
  });

  test('should throw for negative numbers', () => {
    expect(() => validator.validate([-1, 2, 3])).toThrow('negative numbers not allowed -1');
    expect(() => validator.validate([1, -2, 3])).toThrow('negative numbers not allowed -2');
  });

  test('should throw for multiple negative numbers', () => {
    expect(() => validator.validate([-1, 2, -3, 4, -5])).toThrow('negative numbers not allowed -1,-3,-5');
  });
});
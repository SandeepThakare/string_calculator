const { NumberValidator } = require('../../../src/validators');

describe('NumberValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumberValidator();
  });

  test('should not throw for valid numbers', () => {
    expect(() => validator.validate([1, 2, 3])).not.toThrow();
  });
});
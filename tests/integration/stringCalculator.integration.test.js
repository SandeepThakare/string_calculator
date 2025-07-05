const { StringCalculator } = require('../../src');

describe('StringCalculator Integration Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should handle complex scenarios end-to-end', () => {
    expect(calculator.add('')).toBe(0);
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('1,2')).toBe(3);
    expect(calculator.add('1,2,3,4,5')).toBe(15);
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(() => calculator.add('-1,2')).toThrow();
  });
});
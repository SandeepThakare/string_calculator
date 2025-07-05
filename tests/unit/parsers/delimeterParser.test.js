const { DelimiterParser } = require('../../../src/parsers');

describe('DelimiterParser', () => {
  let parser;

  beforeEach(() => {
    parser = new DelimiterParser();
  });

  test('should return default delimiter for simple input', () => {
    const result = parser.parse('1,2,3');
    expect(result.delimiter).toBe(',');
    expect(result.numbersString).toBe('1,2,3');
  });

  test('should parse custom delimiter', () => {
    const result = parser.parse('//;\n1;2;3');
    expect(result.delimiter).toBe(';');
    expect(result.numbersString).toBe('1;2;3');
  });
});
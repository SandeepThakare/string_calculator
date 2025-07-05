const { NumberParser } = require('../../../src/parsers');

describe('NumberParser', () => {
  let parser;

  beforeEach(() => {
    parser = new NumberParser();
  });

  test('should parse comma-separated numbers', () => {
    expect(parser.parse('1,2,3', ',')).toEqual([1, 2, 3]);
  });

  test('should handle newlines mixed with delimiters', () => {
    expect(parser.parse('1\n2,3', ',')).toEqual([1, 2, 3]);
  });
});
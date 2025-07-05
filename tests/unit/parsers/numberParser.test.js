/**
 * Unit tests for NumberParser class.
 * @file numberParser.test.js
 */
const { NumberParser } = require('../../../src/parsers');

/**
 * Test suite for NumberParser
 */
describe('NumberParser', () => {
  let parser;

  beforeEach(() => {
    parser = new NumberParser();
  });

  test('should return empty array for empty string', () => {
    expect(parser.parse('', ',')).toEqual([]);
  });

  test('should parse single number', () => {
    expect(parser.parse('5', ',')).toEqual([5]);
  });

  test('should parse comma-separated numbers', () => {
    expect(parser.parse('1,2,3', ',')).toEqual([1, 2, 3]);
  });

  test('should parse numbers with custom delimiter', () => {
    expect(parser.parse('1;2;3', ';')).toEqual([1, 2, 3]);
  });

  test('should handle newlines mixed with delimiters', () => {
    expect(parser.parse('1\n2,3', ',')).toEqual([1, 2, 3]);
  });

  test('should handle negative numbers', () => {
    expect(parser.parse('-1,2,-3', ',')).toEqual([-1, 2, -3]);
  });
});
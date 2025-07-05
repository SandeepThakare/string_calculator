const { DELIMITERS } = require('../utils');

/**
 * NumberParser class parses a string of numbers using a specified delimiter.
 */
class NumberParser {
  /**
   * Parses a string of numbers into an array of integers.
   * @param {string} numbersString - The string containing numbers.
   * @param {string} delimiter - The delimiter to use for splitting numbers.
   * @returns {number[]} Array of parsed numbers.
   */
  parse(numbersString, delimiter) {
    if (!numbersString) {
      return [];
    }
    
    const normalizedString = numbersString.replace(/\n/g, delimiter);
    return normalizedString
      .split(delimiter)
      .map(numStr => parseInt(numStr, 10))
      .filter(num => !isNaN(num));
  }
}

module.exports = NumberParser;
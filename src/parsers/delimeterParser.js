const { DELIMITERS } = require('../utils');

/**
 * DelimiterParser class extracts delimiter and numbers string from input.
 */
class DelimiterParser {
  /**
   * Parses the input string to extract the delimiter and the numbers string.
   * @param {string} input - The input string containing delimiter and numbers.
   * @returns {{delimiter: string, numbersString: string}} The extracted delimiter and numbers string.
   */
  parse(input) {
    if (input.startsWith(DELIMITERS.CUSTOM_PREFIX)) {
      const lines = input.split(DELIMITERS.NEWLINE);
      const delimiterLine = lines[0];
      const delimiter = delimiterLine.substring(DELIMITERS.CUSTOM_PREFIX.length);
      const numbersString = lines.slice(1).join(DELIMITERS.NEWLINE);
      
      return { delimiter, numbersString };
    }
    
    return {
      delimiter: DELIMITERS.DEFAULT,
      numbersString: input
    };
  }
}

module.exports = DelimiterParser;
const { DELIMITERS } = require('../utils');

class NumberParser {
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
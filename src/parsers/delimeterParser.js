const { DELIMITERS } = require('../utils');

class DelimiterParser {
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
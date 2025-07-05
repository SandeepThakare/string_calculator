const { DelimiterParser, NumberParser } = require('../parsers');
const { NumberValidator } = require('../validators');

class StringCalculator {
  constructor() {
    this.delimiterParser = new DelimiterParser();
    this.numberParser = new NumberParser();
    this.numberValidator = new NumberValidator();
  }
  
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    const { delimiter, numbersString } = this.delimiterParser.parse(numbers);
    const parsedNumbers = this.numberParser.parse(numbersString, delimiter);
    this.numberValidator.validate(parsedNumbers);
    
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
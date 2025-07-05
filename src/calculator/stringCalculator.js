const { NumberParser } = require('../parsers');
const { NumberValidator } = require('../validators');

class StringCalculator {
  constructor() {
    this.numberParser = new NumberParser();
    this.numberValidator = new NumberValidator();
  }
  
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    const parsedNumbers = this.numberParser.parse(numbers, ',');
    this.numberValidator.validate(parsedNumbers);
    
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
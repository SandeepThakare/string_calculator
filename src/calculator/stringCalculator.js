const { DelimiterParser, NumberParser } = require('../parsers');
const { NumberValidator } = require('../validators');

/**
 * StringCalculator class provides functionality to add numbers in a string with custom delimiters and validation.
 */
class StringCalculator {
  /**
   * Initializes the StringCalculator with required parsers and validators.
   */
  constructor() {
    this.delimiterParser = new DelimiterParser();
    this.numberParser = new NumberParser();
    this.numberValidator = new NumberValidator();
  }
  
  /**
   * Adds numbers provided in a string, supporting custom delimiters and validation.
   * @param {string} numbers - The string containing numbers to add.
   * @returns {number} The sum of the numbers.
   * @throws {Error} If validation fails (e.g., negative numbers).
   */
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
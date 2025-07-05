// src/validators/NumberValidator.js

const { MESSAGES } = require('../utils');

class NumberValidator {
  /**
   * Validates an array of numbers
   * @param {number[]} numbers - Array of numbers to validate
   * @throws {Error} - Throws error if validation fails
   */
  validate(numbers) {
    this.validateNegativeNumbers(numbers);
  }
  
  /**
   * Validates that no negative numbers are present
   * @param {number[]} numbers - Array of numbers to check
   * @throws {Error} - Throws error if negative numbers found
   */
  validateNegativeNumbers(numbers) {
    const negativeNumbers = this.findNegativeNumbers(numbers);
    
    if (negativeNumbers.length > 0) {
      const message = `${MESSAGES.NEGATIVE_NOT_ALLOWED} ${negativeNumbers.join(',')}`;
      throw new Error(message);
    }
  }
  
  /**
   * Finds all negative numbers in the array
   * @param {number[]} numbers - Array of numbers to check
   * @returns {number[]} - Array of negative numbers
   */
  findNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
  }
}

module.exports = NumberValidator;
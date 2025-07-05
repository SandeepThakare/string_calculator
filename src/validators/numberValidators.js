const { MESSAGES } = require('../utils');

class NumberValidator {
  validate(numbers) {
    const negativeNumbers = numbers.filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
      const message = `${MESSAGES.NEGATIVE_NOT_ALLOWED} ${negativeNumbers.join(',')}`;
      throw new Error(message);
    }
  }
}

module.exports = NumberValidator;

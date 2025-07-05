/**
 * Defines constants for delimiters and messages used throughout the application.
 * @module utils/constants
 */
/**
 * Delimiter constants for parsing input strings.
 * @type {{DEFAULT: string, NEWLINE: string, CUSTOM_PREFIX: string}}
 */
const DELIMITERS = {
    DEFAULT: ',',
    NEWLINE: '\n',
    CUSTOM_PREFIX: '//'
  };
  
  /**
   * Message constants for validation errors.
   * @type {{NEGATIVE_NOT_ALLOWED: string}}
   */
  const MESSAGES = {
    NEGATIVE_NOT_ALLOWED: 'negative numbers not allowed'
  };
  
  module.exports = {
    DELIMITERS,
    MESSAGES
  };
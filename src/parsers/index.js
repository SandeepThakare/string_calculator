/**
 * Parsers module entry point
 * Exports NumberParser and DelimiterParser classes.
 * @module parsers
 */
const NumberParser = require('./numberParser');
const DelimiterParser = require('./delimeterParser');

module.exports = {
  NumberParser,
  DelimiterParser
};
# String Calculator TDD

A modular implementation of the String Calculator kata using Test-Driven Development principles.

## Features

- ✅ Handle empty strings
- ✅ Handle single numbers
- ✅ Handle comma-separated numbers
- ✅ Handle any amount of numbers
- ✅ Handle newlines as delimiters
- ✅ Support custom delimiters
- ✅ Validate against negative numbers

## Project Structure

```
src/
├── calculator/          # Main calculator logic
├── parsers/            # Delimiter and number parsing
├── validators/         # Number validation
└── utils/             # Constants and utilities

tests/
├── unit/              # Unit tests for each module
└── integration/       # Integration tests
```

## Running Tests

```bash
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage
```

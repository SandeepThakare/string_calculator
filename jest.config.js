module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    testMatch: ['**/?(*.)+(spec|test).js'],
    collectCoverageFrom: ['src/**/*.js', '!src/index.js', '!src/**/index.js']
};
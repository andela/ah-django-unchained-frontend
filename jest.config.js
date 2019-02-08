
module.exports = {

  moduleFileExtensions: ['js', 'json', 'jsx'],
  // path to enzyme configuration
  setupFiles: ['<rootDir>/src/setupTests.js'],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // An array of regexp pattern strings  matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  // Url for the jsDom environment
  testURL: 'http://localhost',
};

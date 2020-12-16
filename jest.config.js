module.exports = {
  clearMocks: true,
  testTimeout: 10000,
  moduleFileExtensions: ['js'],
  testPathIgnorePatterns: ['node_modules'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['node_modules', 'coverage', 'config', 'Model'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};

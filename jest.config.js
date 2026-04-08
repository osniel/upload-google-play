module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  // main.test.ts is skipped until github-action-ts-run-api adds node24 support.
  // Tracking issue: https://github.com/cardinalby/js-github-action-test-utils
  testPathIgnorePatterns: ['/node_modules/', '__tests__/main.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}
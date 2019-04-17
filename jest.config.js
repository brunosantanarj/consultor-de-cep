const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: true,
  moduleNameMapper: {
		"^@UI(.*)$": "<rootDir>/UI$1",
		"^@components(.*)$": "<rootDir>/components$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
    "^@operations(.*)$": "<rootDir>/operations$1",
	}
};

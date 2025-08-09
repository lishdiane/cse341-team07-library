// jest.config.js
module.exports = {
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    "cse341-team07-library/routes/**/*.js",
    "cse341-team07-library/controllers/**/*.js"
  ],
};
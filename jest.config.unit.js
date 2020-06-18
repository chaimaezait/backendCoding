module.exports = {
    testRegex: "\\.spec\\.unit\\.js$",
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
      "json",
      "text",
      "html",
      "lcov",
      "clover"
    ],
    // This option allows the use of a custom results processor
    testResultsProcessor: "jest-sonar-reporter",
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
module.exports = {
  testResultsProcessor: "jest-sonar-reporter",
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // モジュールのエイリアスを設定する（必要に応じて調整）
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // 必要に応じてセットアップファイルを設定
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // TypeScriptの設定ファイルを指定
    },
  },
  reporters: ['default',  ['jest-sonar-report', {
      outputDirectory: '/',
      outputName: 'test-report.xml',
      reportedFilePath: 'absolute'
  }]],
};

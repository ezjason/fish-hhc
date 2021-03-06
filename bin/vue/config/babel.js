module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "Firefox >= 20",
            "Safari >= 6",
            "Explorer >= 9",
            "Chrome >= 12",
            "ChromeAndroid >= 4.0",
            "iOS >= 6",
            "IE 11"
          ]
        },
        "useBuiltIns": false,
        "corejs": false
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    [
      "@babel/plugin-proposal-optional-chaining",
      {
        "loose": false
      }
    ],
    [
      "@babel/plugin-proposal-pipeline-operator",
      {
        "proposal": "minimal"
      }
    ],
    [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      {
        "loose": false
      }
    ],
    "@babel/plugin-proposal-do-expressions",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-json-strings"
  ]
};
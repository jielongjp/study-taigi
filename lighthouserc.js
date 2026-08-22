module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "started server",
      startServerReadyTimeout: 60000,

      url: ["http://localhost:3000/"],

      numberOfRuns: 3,
    },

    assert: {
      assertions: {
        "categories:performance": [
          "error",
          {
            minScore: 0.5,
          },
        ],

        "categories:accessibility": [
          "warn",
          {
            minScore: 0.9,
          },
        ],

        "categories:best-practices": [
          "warn",
          {
            minScore: 0.9,
          },
        ],

        "categories:seo": [
          "warn",
          {
            minScore: 0.9,
          },
        ],

        "largest-contentful-paint": [
          "error",
          {
            maxNumericValue: 10000,
          },
        ],

        "cumulative-layout-shift": [
          "error",
          {
            maxNumericValue: 0.1,
          },
        ],
      },
    },

    upload: {
      target: "temporary-public-storage",
    },
  },
};

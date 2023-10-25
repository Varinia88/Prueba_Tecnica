const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl:'https://es.wikipedia.org/',
   experimentalSessionAndOrigin: true,
   experimentalModifyObstructiveThridPartyCode: true,
  },
});

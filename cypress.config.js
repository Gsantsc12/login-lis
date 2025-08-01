const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
  video: true, // ✅ grava vídeo
  videosFolder: "cypress/videos", // pasta onde os vídeos são salvos
  videoCompression: 32, // compressão do vídeo
  trashAssetsBeforeRuns: true, // limpa vídeos antigos
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    }
  }
});

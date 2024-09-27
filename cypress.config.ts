import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{ts,tsx}', // Ensure this matches the location of your spec files
    baseUrl: 'http://localhost:5173', // Or whatever your base URL is
  },
});

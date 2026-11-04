import { defineConfig } from 'drizzle-kit';
import envConfig from "./src/config/env"

export default defineConfig({
  dialect: 'mysql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: envConfig.databaseUrl,
  },
});

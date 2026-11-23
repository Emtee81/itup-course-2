import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'drizzle-kit'

loadEnvConfig(process.cwd())

export default defineConfig({
  dialect: 'postgresql',
  schema: './modules/m11-databases/s01-drizzle-setup/src/db/schema.ts',
  out: './modules/m11-databases/s01-drizzle-setup/drizzle',
  dbCredentials: { url: process.env.DATABASE_URL! },
})

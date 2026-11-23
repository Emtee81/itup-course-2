#!/usr/bin/env node

import { PGlite } from "@electric-sql/pglite";

const db = new PGlite("./sqlite-data");

console.log("Database server started on ./sqlite-data");
console.log("Press Ctrl+C to stop...");

// Keep the process running
process.on("SIGINT", async () => {
  console.log("\nShutting down...");
  await db.close();
  process.exit(0);
});

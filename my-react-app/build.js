import { build } from "vite";
import react from "@vitejs/plugin-react";

async function main() {
  try {
    console.log("Starting Vite build...");

    await build({
      plugins: [react()],
      build: {
        outDir: "dist",
      },
    });

    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

main();

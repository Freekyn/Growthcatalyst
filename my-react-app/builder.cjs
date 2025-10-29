const { build } = require("vite");
const react = require("@vitejs/plugin-react");
const { execSync } = require("child_process");
const fs = require("fs");

console.log("Starting build process...");

async function runBuild() {
  try {
    // Run TypeScript compiler
    console.log("Running TypeScript compiler...");
    execSync("npx tsc -b", { stdio: "inherit" });

    // Run Vite build
    console.log("Running Vite build...");
    await build({
      plugins: [react()],
      build: {
        outDir: "dist",
      },
    });

    // Verify build output
    console.log("Verifying build output...");
    const distFiles = fs.readdirSync("dist");
    console.log("Dist files:", distFiles);

    if (!distFiles.includes("index.html")) {
      throw new Error("index.html not found in dist folder");
    }

    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

runBuild();

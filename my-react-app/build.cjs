const { build } = require("vite");
const react = require("@vitejs/plugin-react");
const { execSync } = require("child_process");

console.log("Starting build process...");

try {
  // First run TypeScript compiler
  console.log("Running TypeScript compiler...");
  execSync("npx tsc -b", { stdio: "inherit" });

  // Then run Vite build programmatically
  console.log("Running Vite build...");
  build({
    plugins: [react()],
    build: {
      outDir: "dist",
    },
  })
    .then(() => {
      console.log("Build completed successfully!");
    })
    .catch((error) => {
      console.error("Vite build failed:", error);
      process.exit(1);
    });
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}

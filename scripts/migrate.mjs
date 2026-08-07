import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Slides are hand-maintained under components/slides/.
// This script only syncs CSS from the legacy HTML file.
console.warn(
  "Slide markup lives in components/slides/ — this migrator only updates app/globals.css."
);

const html = fs.readFileSync(path.join(root, "openledger_pitch.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("no <style>");
fs.writeFileSync(path.join(root, "app/globals.css"), styleMatch[1].trim());
console.log("Wrote app/globals.css");

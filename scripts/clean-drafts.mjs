/**
 * Deletes stale drafts for all singleton documents.
 * Run: npm run clean-drafts
 *
 * Use this when the Studio shows empty fields after a seed —
 * it means a stale draft is overriding the published version.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
function loadEnv() {
  try {
    const raw = readFileSync(resolve(__dirname, "../.env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const [k, ...rest] = t.split("=");
      process.env[k.trim()] = rest.join("=").trim();
    }
  } catch {}
}
loadEnv();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SINGLETONS = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesPage",
  "productsPage",
  "projectsPage",
];

const draftIds = SINGLETONS.map((id) => `drafts.${id}`);
const found = await client.fetch(`*[_id in $ids]._id`, { ids: draftIds });

if (!found.length) {
  console.log("✅ No stale drafts found — all singletons are clean.");
} else {
  for (const id of found) {
    await client.delete(id);
    console.log(`✅ Deleted ${id}`);
  }
  console.log(`\nDeleted ${found.length} stale draft(s). Refresh the Studio to see all published data.`);
}

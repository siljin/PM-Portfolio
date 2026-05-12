import { createClient, type ClientConfig } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_READ_TOKEN;

export function isSanityConfigured(): boolean {
  return Boolean(projectId && dataset);
}

let _client: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
  if (!isSanityConfigured()) {
    throw new Error(
      "Sanity is not configured. Set SANITY_PROJECT_ID and SANITY_DATASET."
    );
  }

  if (_client) return _client;

  const config: ClientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
    ...(token ? { token } : {}),
  };

  _client = createClient(config);
  return _client;
}

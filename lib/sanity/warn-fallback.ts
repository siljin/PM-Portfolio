/** Single place for Sanity→JSON fallback logging (avoid duplicated strings). */
export function warnSanityFallback(resource: string, error: unknown) {
  console.warn(`Sanity read failed for ${resource}, using local fallback.`, error);
}

/** Single place for Sanity read failure logging. */
export function warnSanityFallback(resource: string, error?: unknown) {
  if (error) {
    console.warn(
      `Sanity read failed for ${resource}; serving an empty state.`,
      error
    );
    return;
  }

  console.warn(
    `Sanity is not configured for ${resource}; serving an empty state.`
  );
}

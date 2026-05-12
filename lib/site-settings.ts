import { defaultSiteSettings } from "./global-variables";
import { isSanityConfigured } from "./sanity/client";
import { fetchSiteSettings } from "./sanity/queries";
import { warnSanityFallback } from "./sanity/warn-fallback";

export type SiteSettings = {
  showNavStatus: boolean;
  navStatusText: string;
  resumeUrl: string;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSanityConfigured()) {
    try {
      const fromSanity = await fetchSiteSettings();
      if (fromSanity) {
        return {
          showNavStatus:
            fromSanity.showNavStatus ?? defaultSiteSettings.showNavStatus,
          navStatusText:
            fromSanity.navStatusText ?? defaultSiteSettings.navStatusText,
          resumeUrl: fromSanity.resumeUrl ?? defaultSiteSettings.resumeUrl,
        };
      }
    } catch (error) {
      warnSanityFallback("site settings", error);
    }
  }

  return {
    showNavStatus: defaultSiteSettings.showNavStatus,
    navStatusText: defaultSiteSettings.navStatusText,
    resumeUrl: defaultSiteSettings.resumeUrl,
  };
}

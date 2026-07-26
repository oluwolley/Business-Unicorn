/** True when a URL is a real destination (not an empty or bare social homepage). */
export function isConfiguredUrl(url: string | undefined | null): url is string {
  if (!url?.trim()) return false;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    const path = parsed.pathname.replace(/\/+$/, "") || "/";

    if (
      (host === "facebook.com" && (path === "/" || path === "/groups")) ||
      (host === "instagram.com" && path === "/") ||
      (host === "linkedin.com" && path === "/")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

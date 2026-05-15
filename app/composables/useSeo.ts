interface SeoOptions {
  title?: string;
  description?: string;
  /** Absolute URL for og:image / twitter:image */
  image?: string;
  /** Override canonical URL (defaults to siteUrl + current route) */
  url?: string;
}

/**
 * Composable to set per-page SEO metadata.
 *
 * Usage:
 *   useSeo({ title: 'My Page', description: 'Page description' })
 */
export const useSeo = (options: SeoOptions = {}) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const siteUrl = config.public.siteUrl as string;
  const canonical = options.url ?? (siteUrl ? `${siteUrl}${route.path}` : undefined);

  useHead({
    title: options.title,
    meta: [
      ...(options.description ? [{ name: "description", content: options.description }] : []),

      // Open Graph
      ...(options.title ? [{ property: "og:title", content: options.title }] : []),
      ...(options.description ? [{ property: "og:description", content: options.description }] : []),
      ...(options.image ? [{ property: "og:image", content: options.image }] : []),
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      { property: "og:type", content: "website" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      ...(options.title ? [{ name: "twitter:title", content: options.title }] : []),
      ...(options.description ? [{ name: "twitter:description", content: options.description }] : []),
      ...(options.image ? [{ name: "twitter:image", content: options.image }] : []),
    ],
    ...(canonical ? { link: [{ rel: "canonical", href: canonical }] } : {}),
  });
};

# Search indexing

The production URL is configured as `https://aaidilz.vercel.app` in
`src/resources/once-ui.config.ts`. Update it before using a different domain;
canonical URLs, structured data, and the sitemap must use the same domain.

After deploying:

1. Add the production URL as a URL-prefix property in Google Search Console.
2. Copy the HTML verification tag's `content` value into the deployment environment
   variable `GOOGLE_SITE_VERIFICATION`, redeploy, and verify ownership.
3. Submit `https://aaidilz.vercel.app/sitemap.xml` under Sitemaps.
4. Inspect the homepage, `/about`, and `/work` with URL Inspection, test the live
   URLs, and request indexing. Monitor the Page Indexing report for exclusions.
5. Optionally repeat verification in Bing Webmaster Tools using
   `BING_SITE_VERIFICATION`.

Public pages render their content in the initial HTML. Each page declares its own
canonical URL. Disabled sections return a server-side 404 and are excluded from
the sitemap, together with password-protected URLs. The sitemap omits modification
dates until actual content update dates are tracked.

Keep links from public profiles (for example GitHub and LinkedIn) pointing to the
production URL so crawlers can discover the portfolio.

A sitemap helps discovery but does not guarantee crawling, indexing, or ranking.
See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

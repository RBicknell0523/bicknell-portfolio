export default async function sitemap() {
  const base = process.env.SITE_URL ?? "https://robertbicknell.dev";
  return [
    {
      url: base,
      lastModified: new Date().toISOString(),
    },
  ];
}

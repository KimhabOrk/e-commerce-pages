/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://ecommerce-pages-hejxw5qpx-ppfis-projects.vercel.app/',
  changefreq: 'daily',
  priority: 1,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  }
}
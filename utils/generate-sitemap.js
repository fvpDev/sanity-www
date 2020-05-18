const fs = require('fs');
const path = require('path');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const hostname = 'https://www.thundariuscreative.com/'
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby([
    'pages/**/*{.js, .jsx, .ts, .tsx}',
    '!pages/_*{.js, .jsx, .ts, .tsx}', // ignore Next.js specific files (e.g., _app.js)
    '!pages/api' // ignore API routes
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const filePath = page
            .replace('.js', '')
            .replace('.jsx', '')
            .replace('.ts', '')
            .replace('.tsx', '');
          const route = filePath === '/index' ? '' : filePath;

          // Get lastModified
          const fullPath = path.join(__dirname + "/../", page)
          const fileStats = fs.statSync(fullPath)
          const lastModified = fileStats.mtime

          return `
            <url>
              <loc>${hostname + route}</loc>
              <lastmod>${lastModified}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.00</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();

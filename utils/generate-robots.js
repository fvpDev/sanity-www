const fs = require('fs');

(async () => {
  const hostname = 'https://sanity-www.now.sh/'
  const robots = `User-agent: *
Sitemap: ${hostname}sitemap.xml
`;

  fs.writeFileSync('public/robots.txt', robots);
})();

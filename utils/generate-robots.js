const fs = require('fs');

(async () => {
  const hostname = 'https://www.thundariuscreative.com/'
  const robots = `User-agent: *
Sitemap: ${hostname}sitemap.xml
`;

  fs.writeFileSync('public/robots.txt', robots);
})();

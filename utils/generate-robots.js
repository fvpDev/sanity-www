const fs = require('fs');

(async () => {
  const base_url = ''
  const robots =
`User-agent: *
Sitemap: ${base_url}/sitemap.xml
`

  fs.writeFileSync('public/robots.txt', robots)
})()

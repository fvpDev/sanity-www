module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{js,jsx,ts,tsx,mdx}',
                './components/**/*.{js,jsx,ts,tsx,mdx}',
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
  ],
}

module.exports = {
  content: [
    './index.html',
    './404.html',
    './faq.html',
    './authors.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0a0a0f',
        'deep': '#12121a',
        'elevated': '#1a1a2e',
        'gold': '#c9a84c',
        'gold-light': '#dbb960',
        'gold-dim': 'rgba(201, 168, 76, 0.15)',
        'warm-white': '#e8e6e1',
        'warm-gray': '#9ca3af',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

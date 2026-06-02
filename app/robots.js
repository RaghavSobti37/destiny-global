export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'PerplexityBot', 'Google-Extended', 'Claude-Web'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.destinnyglobal.com/sitemap.xml',
  }
}

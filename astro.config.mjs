import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 운영 주소는 빌드 환경변수로 정한다. GitHub Pages 빌드는 SITE_URL·SITE_BASE를 넘긴다(.github/workflows/pages.yml).
// 값이 없으면 가칭 도메인 루트로 빌드한다.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.kaer.or.kr',
  base: process.env.SITE_BASE || '/',
  integrations: [sitemap({ filter: (page) => !page.includes('/credits') })],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});

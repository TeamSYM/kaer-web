import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site 값은 운영 도메인이 정해지면 바꾼다(현재는 가칭).
export default defineConfig({
  site: 'https://www.kaer.or.kr',
  integrations: [sitemap({ filter: (page) => !page.includes('/credits') })],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});

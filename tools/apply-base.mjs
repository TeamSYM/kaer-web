// 빌드 결과(dist)의 루트 기준 주소("/img/...", "/about/")에 base 경로를 붙인다.
// GitHub Pages처럼 사이트가 하위 경로(/kaer-web/)에 올라갈 때만 쓴다. SITE_BASE가 없거나 "/"이면 아무것도 하지 않는다.
// 소스의 링크를 하나하나 고치지 않고도 도메인 루트 배포와 하위 경로 배포를 같은 소스로 할 수 있다.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const base = (process.env.SITE_BASE || '/').replace(/\/+$/, '');
if (!base) process.exit(0);

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const exts = new Set(['.html', '.css', '.xml', '.txt', '.webmanifest']);

// 이미 base가 붙은 주소와 프로토콜 상대 주소(//cdn...)는 건드리지 않는다.
const fix = (u) => (u.startsWith('//') || u === base || u.startsWith(`${base}/`) ? u : `${base}${u}`);

function rewrite(text, ext) {
  let out = text;
  if (ext === '.html') {
    out = out.replace(/\b(href|src|poster|action|data-src)=(["'])(\/[^"']*)\2/g, (_, a, q, u) => `${a}=${q}${fix(u)}${q}`);
    out = out.replace(/\bsrcset=(["'])([^"']*)\1/g, (_, q, v) =>
      `srcset=${q}${v.split(',').map((part) => part.replace(/^(\s*)(\/\S*)/, (m, sp, u) => sp + fix(u))).join(',')}${q}`);
  }
  if (ext === '.html' || ext === '.css') {
    out = out.replace(/url\((["']?)(\/[^)"']*)\1\)/g, (_, q, u) => `url(${q}${fix(u)}${q})`);
  }
  if (ext === '.txt') {
    // robots.txt의 Sitemap 줄은 빌드 주소로 다시 쓴다.
    const site = (process.env.SITE_URL || '').replace(/\/+$/, '');
    if (site) out = out.replace(/^Sitemap:.*$/m, `Sitemap: ${site}${base}/sitemap-index.xml`);
  }
  return out;
}

let changed = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    const ext = extname(name);
    if (!exts.has(ext)) continue;
    const before = readFileSync(p, 'utf8');
    const after = rewrite(before, ext);
    if (after !== before) { writeFileSync(p, after); changed++; }
  }
}
walk(dist);
console.log(`apply-base: ${base} 경로를 ${changed}개 파일에 적용했다.`);

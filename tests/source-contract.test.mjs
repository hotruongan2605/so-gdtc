import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (name) => readFile(new URL(name, root), 'utf8');

test('PWA manifest, service worker and app shell remain connected', async () => {
  const [html, manifest, sw] = await Promise.all([
    read('index.html'), read('manifest.webmanifest'), read('sw.js'),
  ]);
  assert.match(html, /<link rel="manifest" href="manifest\.webmanifest">/);
  assert.match(html, /navigator\.serviceWorker\.register\('\.\/sw\.js'\)/);
  assert.match(manifest, /"start_url"\s*:\s*"\.\/"/);
  assert.match(sw, /['"]\.\/index\.html['"]/);
});

test('assessment records retain their required context and values', async () => {
  const html = await read('index.html');
  assert.match(html, /const KEY='gdtc_fast_v2'/);
  assert.match(html, /\[state\.date,state\.className,state\.period\|\|'',state\.lesson\|\|'',sid\]\.join\('\|'\)/);
  assert.match(html, /\['T','H','C'\]/);
  assert.match(html, /localStorage\.setItem\(KEY,JSON\.stringify\(state\)\)/);
});

test('destructive and transfer flows keep their safeguards', async () => {
  const html = await read('index.html');
  assert.match(html, /if\(!confirm\(`Bỏ chấm T\/H\/C/);
  assert.match(html, /if\(confirm\('Xóa toàn bộ dữ liệu đánh giá/);
  assert.match(html, /if\(confirm\('Khôi phục sẽ ghi đè dữ liệu đánh giá hiện tại/);
  assert.match(html, /function exportSeparateClassFiles\(\)/);
  assert.match(html, /function exportAllRecords\(\)/);
  assert.match(html, /function backup\(\)/);
});

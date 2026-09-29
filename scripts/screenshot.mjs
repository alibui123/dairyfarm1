import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const out = path.join(__dirname, '..', '.impeccable', 'screenshots');
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
await desktop.waitForTimeout(2800);
await desktop.screenshot({ path: path.join(out, 'desktop-hero.png'), fullPage: false });
await desktop.screenshot({ path: path.join(out, 'desktop-full.png'), fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
await mobile.waitForTimeout(2800);
await mobile.screenshot({ path: path.join(out, 'mobile-hero.png'), fullPage: false });
await mobile.screenshot({ path: path.join(out, 'mobile-full.png'), fullPage: true });

await browser.close();
console.log('Screenshots saved to', out);

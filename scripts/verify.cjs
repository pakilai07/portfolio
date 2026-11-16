const { chromium } = require('@playwright/test');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 const page = await browser.newPage({reducedMotion:'reduce'});
 const errors=[];page.on('pageerror', e=>errors.push(e.message));
 for (const width of [320,390,768,1024,1440]) {
  await page.setViewportSize({width,height:900});
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(150);
  assert.equal(await page.locator('[role=progressbar]').getAttribute('aria-valuenow'),'0');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);
  await page.getByRole('button',{name:'Next experience',exact:true}).click();
  await page.waitForTimeout(100);
  assert.equal(await page.getByRole('button',{name:'Show experience 2'}).getAttribute('aria-pressed'),'true');
  await page.getByRole('button',{name:'Show experience 2'}).click();
  await page.waitForTimeout(100);
  await page.getByRole('button',{name:'Next experience',exact:true}).click();
  await page.waitForTimeout(100);
  assert.equal(await page.getByRole('button',{name:'Show experience 1'}).getAttribute('aria-pressed'),'true');
  await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));
  await page.waitForTimeout(150);
  assert.equal(await page.locator('[role=progressbar]').getAttribute('aria-valuenow'),'100');
  await page.evaluate(()=>window.scrollTo(0,0));
  if(width===390||width===1440) await page.screenshot({path:`/tmp/portfolio-${width}.png`,fullPage:true});
  console.log(`PASS ${width}px: no overflow, progress 0–100, carousel next/dots/wrap`);
 }
 assert.deepEqual(errors,[]);console.log('PASS no browser runtime errors');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

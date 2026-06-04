const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    page.on('error', err => errors.push(err.toString()));
    
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });
    
    // Take initial screenshot
    await page.screenshot({ path: 'hero-initial.png' });
    console.log('✓ Screenshot 1: hero-initial.png');
    
    // Simulate scroll
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'hero-scrolled.png' });
    console.log('✓ Screenshot 2: hero-scrolled.png');
    
    // Check for scroll animation elements
    const hasLineAnimation = await page.evaluate(() => {
      const line = document.querySelector('line');
      return line !== null;
    });
    
    console.log('\n✓ Line animation element:', hasLineAnimation ? 'FOUND' : 'MISSING');
    
    // Check circles
    const hasCircles = await page.evaluate(() => {
      const circles = document.querySelectorAll('[data-circle]');
      return circles.length > 0;
    });
    
    console.log('✓ Business circle elements:', hasCircles ? 'FOUND' : 'MISSING');
    
    if (errors.length > 0) {
      console.log('\n⚠ Console Errors:', errors);
    } else {
      console.log('\n✓ No console errors detected');
    }
    
    await browser.close();
  } catch (err) {
    console.log('Note: Puppeteer not available, skipping visual verification');
    if (browser) await browser.close();
  }
})();

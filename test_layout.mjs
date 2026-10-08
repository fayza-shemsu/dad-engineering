import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const viewports = [
    { width: 1920, height: 877 },
    { width: 1920, height: 800 },
    { width: 1366, height: 768 },
    { width: 1280, height: 720 },
    { width: 390, height: 844 } // phone
  ];

  for (const vp of viewports) {
    await page.setViewport(vp);
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    const data = await page.evaluate(() => {
      const home = document.querySelector('#home');
      if (!home) return null;
      const rect = home.getBoundingClientRect();
      const ih = window.innerHeight;
      return { bottom: rect.bottom, innerHeight: ih, fits: rect.bottom <= ih };
    });
    
    console.log(`Viewport ${vp.width}x${vp.height}: bottom=${data.bottom}, window.innerHeight=${data.innerHeight}, FITS: ${data.fits}`);
  }
  
  await browser.close();
})();

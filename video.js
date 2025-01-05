const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 375, height: 667 }
    }
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  
  // 等待动画完成（5秒图片切换 + 3秒字幕动画）
  await page.waitForTimeout(8000);

  await context.close();
  await browser.close();
})();

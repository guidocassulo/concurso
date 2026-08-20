async function testCourseraLogin() {
  const puppeteer = await import('puppeteer-core');
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1366,768']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  console.log('Navigating to login page...');
  await page.goto('https://www.coursera.org/?authMode=login', { waitUntil: 'networkidle2', timeout: 60000 });

  await new Promise(r => setTimeout(r, 2000));

  console.log('Filling credentials...');
  try {
    await page.waitForSelector('input[name="email"], input[type="email"]', { timeout: 10000 });
    await page.type('input[name="email"], input[type="email"]', 'guidocassulo@gmail.com', { delay: 50 });
    await page.type('input[name="password"], input[type="password"]', 'hangarwolf18', { delay: 50 });
    
    // Submit
    const buttons = await page.$$('button[type="submit"], button');
    for (let b of buttons) {
      const txt = await page.evaluate(el => el.innerText, b);
      if (txt && (txt.toLowerCase().includes('iniciar') || txt.toLowerCase().includes('login') || txt.toLowerCase().includes('entrar'))) {
        await b.click();
        break;
      }
    }

    console.log('Waiting after login submit...');
    await new Promise(r => setTimeout(r, 8000));
    
    const currentUrl = page.url();
    console.log('Current URL after login attempt:', currentUrl);
    
    await page.screenshot({ path: 'd:/proyecto/scratch/coursera_after_login.png' });
    console.log('Saved coursera_after_login.png');
  } catch(e) {
    console.error('Error during login:', e.message);
    await page.screenshot({ path: 'd:/proyecto/scratch/coursera_login_error.png' });
  }

  await browser.close();
}

testCourseraLogin().catch(console.error);

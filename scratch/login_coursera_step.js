async function runLoginAndCapture() {
  const puppeteer = await import('puppeteer-core');
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1400,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  console.log('Navigating to login...');
  await page.goto('https://www.coursera.org/?authMode=login', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));

  // Step 1: Email
  console.log('Typing email...');
  const emailInput = await page.waitForSelector('input[name="email"], input[type="email"]', { timeout: 10000 });
  await emailInput.click();
  await emailInput.type('guidocassulo@gmail.com', { delay: 40 });
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Submitting email / pressing Enter...');
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 3000));

  // Step 2: Password
  console.log('Looking for password field...');
  try {
    const passInput = await page.waitForSelector('input[name="password"], input[type="password"]', { timeout: 10000 });
    console.log('Typing password...');
    await passInput.click();
    await passInput.type('hangarwolf18', { delay: 40 });
    await new Promise(r => setTimeout(r, 1000));
    
    console.log('Submitting password / pressing Enter...');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 8000));
  } catch(e) {
    console.log('Password step note:', e.message);
  }

  console.log('URL after login:', page.url());
  await page.screenshot({ path: 'd:/proyecto/scratch/coursera_logged_in.png' });

  // Navigate to accomplishments / my courses
  console.log('Navigating to accomplishments...');
  await page.goto('https://www.coursera.org/accomplishments', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: 'd:/proyecto/scratch/coursera_accomplishments.png' });

  await browser.close();
  console.log('Done!');
}

runLoginAndCapture().catch(console.error);

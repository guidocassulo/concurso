async function runCourseraAndCisco() {
  const puppeteer = await import('puppeteer-core');
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1400,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  console.log('--- 1. COURSERA LOGIN ---');
  await page.goto('https://www.coursera.org/?authMode=login', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));

  // Email
  const emailInput = await page.waitForSelector('input[name="email"], input[type="email"]');
  await emailInput.click();
  await emailInput.type('guidocassulo@gmail.com', { delay: 40 });
  await new Promise(r => setTimeout(r, 1000));
  
  // Click continue / submit email
  let btns = await page.$$('button');
  for (let b of btns) {
    const t = await page.evaluate(el => el.innerText, b);
    if (t && (t.includes('Continuar') || t.includes('Continue') || t.includes('Siguiente') || t.includes('Next'))) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 2500));

  // Password
  console.log('Entering password...');
  const passInput = await page.waitForSelector('input[name="password"], input[type="password"]');
  await passInput.click();
  await passInput.type('hangarwolf18', { delay: 40 });
  await new Promise(r => setTimeout(r, 1000));

  // Click login button
  btns = await page.$$('button');
  for (let b of btns) {
    const t = await page.evaluate(el => el.innerText, b);
    if (t && (t.includes('Iniciar sesión') || t.includes('Log In') || t.includes('Iniciar Sesión') || t.includes('Entrar') || t.includes('Continuar'))) {
      console.log('Clicking login button:', t);
      await b.click();
      break;
    }
  }

  console.log('Waiting for login to complete...');
  await new Promise(r => setTimeout(r, 10000));
  console.log('URL after login:', page.url());

  const targetDir = 'd:/proyecto/capturas_horas_cursos';

  const courseraCourses = [
    { id: '01_Alberta_Object_Oriented_Design', url: 'https://www.coursera.org/learn/object-oriented-design' },
    { id: '02_Alberta_Design_Patterns', url: 'https://www.coursera.org/learn/design-patterns' },
    { id: '03_Alberta_Software_Architecture', url: 'https://www.coursera.org/learn/software-architecture' },
    { id: '04_Alberta_Service_Oriented_Architecture', url: 'https://www.coursera.org/learn/service-oriented-architecture' },
    { id: '05_IBM_Machine_Learning_with_Python', url: 'https://www.coursera.org/learn/machine-learning-with-python' },
    { id: '06_IBM_Databases_and_SQL_for_Data_Science', url: 'https://www.coursera.org/learn/sql-data-science' },
    { id: '07_IBM_Python_for_Data_Science_AI_Development', url: 'https://www.coursera.org/learn/python-for-applied-data-science-ai' },
    { id: '08_IBM_Data_Analysis_with_Python', url: 'https://www.coursera.org/learn/data-analysis-with-python' },
    { id: '09_IBM_Developing_AI_Applications_Python_Flask', url: 'https://www.coursera.org/account/accomplishments/verify/5PO4DIGQ30DJ' },
    { id: '00_Alberta_Especializacion_Completa', url: 'https://www.coursera.org/specializations/software-design-architecture' }
  ];

  for (let c of courseraCourses) {
    console.log('Navigating to ' + c.id + ' -> ' + c.url);
    try {
      await page.goto(c.url, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise(r => setTimeout(r, 3000));
      
      // Scroll slightly to reveal the course details / hours widget
      await page.evaluate(() => window.scrollBy(0, 350));
      await new Promise(r => setTimeout(r, 1000));

      const outPath = targetDir + '/' + c.id + '.png';
      await page.screenshot({ path: outPath, fullPage: false });
      console.log('Saved ' + outPath);
    } catch(e) {
      console.error('Error capturing ' + c.id + ':', e.message);
    }
  }

  await browser.close();
  console.log('All completed successfully!');
}

runCourseraAndCisco().catch(console.error);

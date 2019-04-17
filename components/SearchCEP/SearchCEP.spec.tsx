import puppeter from 'puppeteer';

let browser: any;
let page: any;

beforeAll(async () => {
  browser = await puppeter.launch({ headless: false });
  page = await browser.newPage();
});

describe('SearchCEP', () => {

  it('should have valid cep', async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('body');

    await page.click('input');
    await page.type('input', '26515-420');
    await page.click('button[type=submit]');

    await page.waitForSelector('strong');
  }, 1600000);


  it('should have invalid cep', async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('body');

    await page.click('input');
    await page.type('input', '12345-678');
    await page.click('button[type=submit]');

    await page.waitForSelector('strong');
  }, 1600000);
});

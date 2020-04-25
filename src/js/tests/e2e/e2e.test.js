const puppeteer = require('puppeteer');
const { fork } = require('child_process');

jest.setTimeout(30000);
describe('E2E', () => {
  let browser = null;
  let page = null;
  let server = null;
  const url = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch(
      {
        // headless: false,
        // slowMo: 100,
        // devtools: true,
      },
    );
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe('Tests', () => {
    test('First click', async () => {
      await page.goto(url);
      const button = await page.$('button[class=button]');
      button.click();
      await page.waitFor(() => document.querySelector('div.popup'));
    });
    test('Second click', async () => {
      const button = await page.$('button[class=button]');
      button.click();
      await page.waitFor(() => !document.querySelector('div.popup'));
    });
  });
});

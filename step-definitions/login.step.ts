import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(20000);
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given('I am on the login page', async function () {
  console.log('Launching browser...');

  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  console.log('Going to login page...');
  await page.goto('https://the-internet.herokuapp.com/login', {
    waitUntil: 'domcontentloaded',
  });
});

When('I login with valid credentials', async function () {
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
});

Then('I should see the dashboard', async function () {
  const url = page.url();
  assert(url.includes('/secure'));
  await browser.close();
});

console.log('Navigating to login page...');
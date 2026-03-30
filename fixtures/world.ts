import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AuthFlow } from '../flows/AuthFlow';

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  authFlow!: AuthFlow;

  async init() {
    console.log('Launching browser...');
    this.browser = await chromium.launch({ headless: false });

    console.log('Creating page...');
    this.page = await this.browser.newPage();

    console.log('Wiring objects...');
    this.loginPage = new LoginPage(this.page);
    this.authFlow = new AuthFlow(this.loginPage);
  }

  async cleanup() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
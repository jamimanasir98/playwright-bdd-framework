import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the login page', async function () {
  await this.loginPage.goto();{
      await this.page.goto('https://the-internet.herokuapp.com/login', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });
  }
});

When('I login with valid credentials', async function () {
  await this.authFlow.login({
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  });
});

Then('I should see the dashboard', async function () {
  await expect(this.page).toHaveURL(/secure/);
});
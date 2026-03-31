import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { validUser } from '../models/TestData';

Given('I am on the login page', async function () {
  await this.loginPage.goto();
});

When('I login with valid credentials', async function () {
  await this.authFlow.login(validUser);
});

When(
  'I login with username {string} and password {string}',
  async function (username: string, password: string) {
    await this.authFlow.login({ username, password });
  }
);

Then('I should see a success message', async function () {
  await expect(await this.loginPage.isSuccessMessageVisible()).toBeTruthy();
  await expect(this.page).toHaveURL(/secure/);
});

Then('I should see an error message', async function () {
  await expect(await this.loginPage.isErrorMessageVisible()).toBeTruthy();
});
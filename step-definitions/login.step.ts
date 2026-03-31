import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { validUser, invalidUserMap } from '../models/TestData';

Given('I am on the login page', async function () {
  await this.loginPage.goto();
});

When('I login with valid credentials', async function () {
  await this.authFlow.login(validUser);
});

When(
  'I login with invalid {string} credentials',
  async function (type: string) {
    const user = invalidUserMap[type];

    if (!user) {
      throw new Error(`Invalid test data type: ${type}`);
    }

    await this.authFlow.login(user);
  }
);

Then('I should see a success message', async function () {
  await expect(await this.loginPage.isSuccessMessageVisible()).toBeTruthy();
  await expect(this.page).toHaveURL(/secure/);
});

Then('I should see an error message', async function () {
  await expect(await this.loginPage.isErrorMessageVisible()).toBeTruthy();
});
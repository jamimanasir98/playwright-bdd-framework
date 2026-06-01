import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { validUser } from '../models/TestData';

Given('I have logged in', async function () {
  await this.loginPage.goto();
  await this.loginPage.login(validUser);
  expect(await this.loginPage.isSuccessMessageVisible()).toBeTruthy();
  await expect(this.page).toHaveURL(/secure/);
});

Given('I navigate directly to the secure page', async function () {
  await this.securePage.goto();
});

When('I click the logout button', async function () {
  await this.securePage.clickLogoutButton();
});

Then('I should return to the login page and I should see a confirmation message', async function () {
  await expect(this.page).toHaveURL(/login/);
  expect(await this.loginPage.isLogoutMessageVisible()).toBeTruthy();
});

Then('I should see the secure area heading', async function () {
  expect(await this.securePage.isSecureAreaHeadingVisible()).toBeTruthy();
});

Then('I should be redirected to the login page', async function () {
  await expect(this.page).toHaveURL(/login/);
});

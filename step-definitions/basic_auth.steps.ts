import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I access the basic auth page with valid credentials', async function () {
  await this.basicAuthPage.gotoWithCredentials('admin', 'admin');
});

Given('I access the basic auth page with invalid credentials', async function () {
  try {
    await this.basicAuthPage.gotoWithCredentials('wrong', 'wrong');
    this.authFailed = false;
  } catch {
    this.authFailed = true;
  }
});

Then('I should see the authentication success message', async function () {
  expect(await this.basicAuthPage.isSuccessMessageVisible()).toBeTruthy();
});

Then('I should not see the authentication success message', async function () {
  if (this.authFailed) return; // browser rejected invalid credentials — auth failed as expected
  expect(await this.basicAuthPage.isSuccessMessageVisible()).toBeFalsy();
});

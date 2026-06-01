import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the checkboxes page', async function () {
  await this.checkboxesPage.goto();
});

When('I check checkbox {int}', async function (number: number) {
  await this.checkboxesPage.check(number - 1);
});

When('I uncheck checkbox {int}', async function (number: number) {
  await this.checkboxesPage.uncheck(number - 1);
});

Then('checkbox {int} should be checked', async function (number: number) {
  expect(await this.checkboxesPage.isChecked(number - 1)).toBeTruthy();
});

Then('checkbox {int} should be unchecked', async function (number: number) {
  expect(await this.checkboxesPage.isChecked(number - 1)).toBeFalsy();
});

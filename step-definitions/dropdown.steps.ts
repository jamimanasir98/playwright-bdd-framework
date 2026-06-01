import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the dropdown page', async function () {
  await this.dropdownPage.goto();
});

When('I select {string}', async function (option: string) {
  await this.dropdownPage.selectOption(option);
});

Then('the default placeholder option should be selected', async function () {
  expect(await this.dropdownPage.isDefaultSelected()).toBeTruthy();
});

Then('{string} should be selected', async function (option: string) {
  const selected = await this.dropdownPage.getSelectedOptionText();
  expect(selected?.trim()).toBe(option);
});

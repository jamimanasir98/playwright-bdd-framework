import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the drag and drop page', async function () {
  await this.dragAndDropPage.goto();
});

When('I drag column A to column B', async function () {
  await this.dragAndDropPage.dragAToB();
});

Then('column A should be labelled {string}', async function (label: string) {
  const text = await this.dragAndDropPage.getColumnALabel();
  expect(text?.trim()).toBe(label);
});

Then('column B should be labelled {string}', async function (label: string) {
  const text = await this.dragAndDropPage.getColumnBLabel();
  expect(text?.trim()).toBe(label);
});

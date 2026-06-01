import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the broken images page', async function () {
  await this.brokenImagesPage.goto();
});

Then('the page should contain images', async function () {
  const count = await this.brokenImagesPage.getTotalImageCount();
  expect(count).toBeGreaterThan(0);
});

Then('some images should be broken', async function () {
  const count = await this.brokenImagesPage.getBrokenImageCount();
  expect(count).toBeGreaterThan(0);
});

Then('some images should load correctly', async function () {
  const count = await this.brokenImagesPage.getWorkingImageCount();
  expect(count).toBeGreaterThan(0);
});

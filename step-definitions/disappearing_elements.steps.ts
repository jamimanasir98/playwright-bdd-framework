import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the disappearing elements page', async function () {
  await this.disappearingElementsPage.goto();
});

Then('the {string} nav item should be visible', async function (name: string) {
  expect(await this.disappearingElementsPage.isNavItemVisible(name)).toBeTruthy();
});

Then('the page should have at least {int} nav items', async function (minimum: number) {
  const count = await this.disappearingElementsPage.getNavItemCount();
  expect(count).toBeGreaterThanOrEqual(minimum);
});

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the add remove elements page', async function () {
  await this.addRemovePage.goto();
});

When('I add {int} element(s)', async function (count: number) {
  await this.addRemovePage.addElements(count);
});

When('I remove {int} element(s)', async function (count: number) {
  await this.addRemovePage.removeElements(count);
});

When('I remove the first element', async function () {
  await this.addRemovePage.removeElement(0);
});

When('I remove the last element', async function () {
  const count = await this.addRemovePage.getDeleteButtonCount();
  await this.addRemovePage.removeElement(count - 1);
});

When('I remove all elements', async function () {
  await this.addRemovePage.removeAllElements();
});

Then('there should be {int} delete button(s)', async function (count: number) {
  const actual = await this.addRemovePage.getDeleteButtonCount();
  expect(actual).toBe(count);
});

Then('the add element button should still be visible', async function () {
  expect(await this.addRemovePage.isAddButtonVisible()).toBeTruthy();
});

import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Dialog } from '@playwright/test';

Given('I am on the context menu page', async function () {
  await this.contextMenuPage.goto();
});

When('I right-click the context menu box', async function () {
  this.page.once('dialog', async (dialog: Dialog) => {
    this.alertMessage = dialog.message();
    await dialog.accept();
  });
  await this.contextMenuPage.rightClickBox();
});

Then('I should see an alert', async function () {
  expect(this.alertMessage).toBeTruthy();
});

Then('the alert message should be {string}', async function (text: string) {
  expect(this.alertMessage).toBe(text);
});

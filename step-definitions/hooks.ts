import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds

Before(async function () {
  await this.init();
});

After(async function () {
  await this.cleanup();
});
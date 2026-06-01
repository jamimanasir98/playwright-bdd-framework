import { Page } from 'playwright';
import { config } from '../utils/config';

export class CheckboxesPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/checkboxes`);
  }

  async isChecked(index: number) {
    return this.page.locator('input[type="checkbox"]').nth(index).isChecked();
  }

  async check(index: number) {
    await this.page.locator('input[type="checkbox"]').nth(index).check();
  }

  async uncheck(index: number) {
    await this.page.locator('input[type="checkbox"]').nth(index).uncheck();
  }
}

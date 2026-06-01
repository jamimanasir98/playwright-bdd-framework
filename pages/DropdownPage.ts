import { Page } from 'playwright';
import { config } from '../utils/config';

export class DropdownPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/dropdown`);
  }

  async selectOption(label: string) {
    await this.page.selectOption('#dropdown', { label });
  }

  async getSelectedOptionText() {
    return this.page.locator('#dropdown option:checked').textContent();
  }

  async isDefaultSelected() {
    const value = await this.page.locator('#dropdown').inputValue();
    return value === '';
  }
}

import { Page } from 'playwright';
import { config } from '../utils/config';

export class SecurePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/secure`);
  }

  async clickLogoutButton() {
    await this.page.click('a[href="/logout"]');
  }

  async isSecureAreaHeadingVisible() {
    return this.page.locator('h2').isVisible();
  }
}

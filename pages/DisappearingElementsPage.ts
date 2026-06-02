import { Page } from 'playwright';
import { config } from '../utils/config';

export class DisappearingElementsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/disappearing_elements`);
  }

  async isNavItemVisible(name: string) {
    return this.page.getByRole('link', { name }).isVisible();
  }

  async getNavItemCount() {
    return this.page.locator('.example li').count();
  }
}

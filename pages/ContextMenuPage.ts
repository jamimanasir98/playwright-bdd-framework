import { Page } from 'playwright';
import { config } from '../utils/config';

export class ContextMenuPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/context_menu`);
  }

  async rightClickBox() {
    await this.page.locator('#hot-spot').click({ button: 'right' });
  }
}

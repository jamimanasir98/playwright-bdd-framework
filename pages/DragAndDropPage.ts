import { Page } from 'playwright';
import { config } from '../utils/config';

export class DragAndDropPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/drag_and_drop`);
  }

  async getColumnALabel() {
    return this.page.locator('#column-a header').textContent();
  }

  async getColumnBLabel() {
    return this.page.locator('#column-b header').textContent();
  }

  async dragAToB() {
    await this.page.locator('#column-a').dragTo(this.page.locator('#column-b'));
  }
}

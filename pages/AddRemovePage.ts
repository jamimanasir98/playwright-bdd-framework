import { Page } from 'playwright';
import { config } from '../utils/config';

export class AddRemovePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/add_remove_elements/`);
  }

  async clickAddElement() {
    await this.page.getByRole('button', { name: 'Add Element' }).click();
  }

  async addElements(count: number) {
    for (let i = 0; i < count; i++) {
      await this.clickAddElement();
    }
  }

  async removeElement(index: number) {
    await this.page.getByRole('button', { name: 'Delete' }).nth(index).click();
  }

  async removeElements(count: number) {
    for (let i = 0; i < count; i++) {
      await this.page.getByRole('button', { name: 'Delete' }).nth(0).click();
    }
  }

  async removeAllElements() {
    const count = await this.getDeleteButtonCount();
    for (let i = 0; i < count; i++) {
      await this.page.getByRole('button', { name: 'Delete' }).nth(0).click();
    }
  }

  async getDeleteButtonCount() {
    return this.page.getByRole('button', { name: 'Delete' }).count();
  }

  async isAddButtonVisible() {
    return this.page.getByRole('button', { name: 'Add Element' }).isVisible();
  }
}

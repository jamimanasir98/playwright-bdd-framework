import { Page } from 'playwright';
import { config } from '../utils/config';
import { User } from '../models/User';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/login`);
  }

  async fillUsername(username: string) {
    await this.page.fill('#username', username);
  }

  async fillPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async clickLogin() {
    await this.page.click('button[type="submit"]');
  }

  async login(user: User) {
    await this.fillUsername(user.username);
    await this.fillPassword(user.password);
    await this.clickLogin();
  }

  async getFlashMessage() {
    return this.page.locator('#flash').textContent();
  }

  async isSuccessMessageVisible() {
    return this.page.locator('#flash.success').isVisible();
  }

  async isErrorMessageVisible() {
    return this.page.locator('#flash.error').isVisible();
  }

  async isLogoutMessageVisible() {
    return this.page.locator('#flash.success').isVisible();
  }
}
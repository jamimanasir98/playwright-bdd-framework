import { Page } from 'playwright';
import { config } from '../utils/config';

export class BasicAuthPage {
  constructor(private page: Page) {}

  async gotoWithCredentials(username: string, password: string) {
    const base = config.baseUrl.replace('https://', '');
    await this.page.goto(`https://${username}:${password}@${base}/basic_auth`);
  }

  async isSuccessMessageVisible() {
    return this.page.getByText('Congratulations! You must have the proper credentials.').isVisible();
  }
}

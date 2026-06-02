import { Page } from 'playwright';
import { config } from '../utils/config';

export class BrokenImagesPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(`${config.baseUrl}/broken_images`);
  }

  async getTotalImageCount() {
    return this.page.locator('img').count();
  }

  async getBrokenImageCount() {
    return this.page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.filter(img => (img as HTMLImageElement).naturalWidth === 0).length;
    });
  }

  async getWorkingImageCount() {
    return this.page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.filter(img => (img as HTMLImageElement).naturalWidth > 0).length;
    });
  }
}

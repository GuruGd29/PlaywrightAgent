import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async isVisible(locator: any) {
    return await locator.isVisible();
  }
}

import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly addToCartButtons = () => this.page.getByText('Add to cart');
  readonly continueShoppingButton = () => this.page.getByRole('button', { name: 'Continue Shopping' });
  readonly cartLink = () => this.page.getByRole('link', { name: ' Cart' });
  readonly viewCartLink = () => this.page.getByRole('link', { name: 'View Cart' });
  readonly featuredItemsHeading = () => this.page.getByText('Features Items');
  readonly addedNotification = () => this.page.locator('h4:has-text("Added!")');

  async navigateToHomepage() {
    await this.navigate('https://automationexercise.com/');
  }

  async addFirstProductToCart() {
    await this.addToCartButtons().first().click();
  }

  async addProductByIndex(index: number) {
    const addBtn = this.addToCartButtons().nth(index);
    await addBtn.scrollIntoViewIfNeeded();
    await addBtn.click({ force: true });
  }

  async verifyAddedNotification() {
    await expect(this.addedNotification()).toBeVisible();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton().click();
  }

  async clickCartLink() {
    await this.cartLink().click();
  }

  async clickViewCart() {
    await this.viewCartLink().click();
  }

  async verifyFeaturedItemsVisible() {
    await expect(this.featuredItemsHeading()).toBeVisible();
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/\/products|\/$/);
  }

  async verifyOnHomePage() {
    await expect(this.page).toHaveURL(/\//);
  }

  async waitForPageStability() {
    await this.page.waitForLoadState('networkidle');
  }

  async getPageURL() {
    return this.page.url();
  }
}


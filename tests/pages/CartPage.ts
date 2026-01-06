import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartHeading = () => this.page.getByText('Shopping Cart');
  readonly productImage = () => this.page.locator('img[alt="Product Image"]').first();
  readonly productName = (name: string) => this.page.getByRole('heading', { name });
  readonly categoryInfo = (category: string) => this.page.getByText(category);
  readonly price = (price: string) => this.page.getByText(price).first();
  readonly quantityButton = () => this.page.getByRole('button', { name: '1' }).first();
  readonly totalPrice = (price: string) => this.page.getByText(price).last();
  readonly removeButton = () => this.page.locator('.cart_quantity_delete').first();
  readonly emptyCartMessage = () => this.page.getByText('Cart is empty!');
  readonly buyProductsLink = () => this.page.getByText('Click here to buy products.');
  readonly proceedToCheckoutButton = () => this.page.locator('text="Proceed To Checkout"');
  readonly cartTable = () => this.page.locator('table');
  readonly cartTableBody = () => this.page.locator('table tbody tr');
  readonly itemHeader = () => this.page.getByText('Item');
  readonly descriptionHeader = () => this.page.getByText('Description');
  readonly priceHeader = () => this.page.getByText('Price');
  readonly quantityHeader = () => this.page.getByText('Quantity');
  readonly totalHeader = () => this.page.getByText('Total');

  async navigateToCart() {
    await this.navigate('https://automationexercise.com/view_cart');
  }

  async verifyCartPageDisplayed() {
    await expect(this.page).toHaveURL(/\/view_cart/);
    await expect(this.cartHeading()).toBeVisible();
  }

  async verifyProductImage() {
    await expect(this.productImage()).toBeVisible();
  }

  async verifyProductName(name: string) {
    await expect(this.productName(name)).toBeVisible();
  }

  async verifyCategoryInfo(category: string) {
    await expect(this.categoryInfo(category)).toBeVisible();
  }

  async verifyPrice(price: string) {
    await expect(this.price(price)).toBeVisible();
  }

  async verifyQuantity() {
    await expect(this.quantityButton()).toBeVisible();
  }

  async verifyTotalPrice(price: string) {
    await expect(this.totalPrice(price)).toBeVisible();
  }

  async verifyRemoveButtonExists() {
    await expect(this.removeButton()).toBeVisible();
  }

  async verifyCartHeaders() {
    await expect(this.itemHeader()).toBeVisible();
    await expect(this.descriptionHeader()).toBeVisible();
    await expect(this.priceHeader()).toBeVisible();
    await expect(this.quantityHeader()).toBeVisible();
    await expect(this.totalHeader()).toBeVisible();
  }

  async removeProduct() {
    await this.removeButton().click();
  }

  async verifyProductRemoved(name: string) {
    await expect(this.productName(name)).not.toBeVisible();
  }

  async verifyEmptyCart() {
    await expect(this.emptyCartMessage()).toBeVisible();
    await expect(this.buyProductsLink()).toBeVisible();
  }

  async verifyCartRowCount(count: number) {
    if (count === 0) {
      await expect(this.cartTableBody()).not.toHaveCount(0);
    } else {
      await expect(this.cartTableBody()).toHaveCount(count);
    }
  }

  async verifyCheckoutButtonVisible() {
    await expect(this.proceedToCheckoutButton()).toBeVisible();
  }

  async verifyEmptyCartLink() {
    const buyLink = this.page.getByRole('link', { name: 'here' });
    await expect(buyLink).toBeVisible();
    await expect(buyLink).toHaveAttribute('href', '/products');
  }
}

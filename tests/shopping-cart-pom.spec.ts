// spec: ../../AUTOMATION_EXERCISE_TEST_PLAN.md
// section: 4. Shopping Cart Management
// Pattern: Page Object Model (POM)

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

test.describe('Shopping Cart Management - POM', () => {
  let homePage: HomePage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
  });

  test('View Cart - Verify cart page displays with product information', async () => {
    // Arrange
    await homePage.navigateToHomepage();

    // Act
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();
    await homePage.clickViewCart();

    // Assert
    await cartPage.verifyCartPageDisplayed();
    await cartPage.verifyProductImage();
    await cartPage.verifyProductName('Blue Top');
    await cartPage.verifyCategoryInfo('Women > Tops');
    await cartPage.verifyPrice('Rs. 500');
    await cartPage.verifyQuantity();
    await cartPage.verifyTotalPrice('Rs. 500');
    await cartPage.verifyRemoveButtonExists();
    await cartPage.verifyCartHeaders();
  });

  test('Update Quantity in Cart - Verify quantity field allows editing and total updates', async () => {
    // Arrange
    await homePage.navigateToHomepage();
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();

    // Act
    await homePage.clickViewCart();

    // Assert - Verify quantity is displayed
    await expect(cartPage.quantityButton()).toBeVisible();
  });

  test('Remove Product from Cart - Verify product removal and cart update', async () => {
    // Arrange
    await homePage.navigateToHomepage();
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();

    // Navigate to cart
    await homePage.clickViewCart();
    await cartPage.verifyProductName('Blue Top');

    // Act - Remove product
    await cartPage.removeProduct();

    // Assert
    await cartPage.verifyProductRemoved('Blue Top');
    await cartPage.verifyEmptyCart();
  });

  test('Continue Shopping from Cart - Verify navigation and cart preservation', async () => {
    // Arrange
    await homePage.navigateToHomepage();
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();

    // Act
    await homePage.clickContinueShopping();

    // Assert - Verify returned to products page
    await homePage.verifyOnProductsPage();
    await homePage.verifyFeaturedItemsVisible();

    // Navigate back to cart
    await homePage.clickCartLink();

    // Assert - Verify items preserved
    await expect(homePage.page).toHaveURL(/\/view_cart/);
    await cartPage.verifyProductName('Blue Top');
    await expect(homePage.page.locator('p:has-text("Rs. 500")').first()).toBeVisible();
  });

  test('Multiple Items in Cart - Verify cart handles multiple products correctly', async () => {
    // Arrange
    await homePage.navigateToHomepage();

    // Act - Add first product
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();
    await homePage.clickContinueShopping();
    await homePage.waitForPageStability();

    // Navigate to cart to verify
    await homePage.clickCartLink();

    // Assert - Verify at least one product in cart
    await expect(cartPage.cartTableBody()).not.toHaveCount(0);
  });

  test('Cart Totals Calculation - Verify cart calculates totals correctly', async () => {
    // Arrange
    await homePage.navigateToHomepage();

    // Act
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();
    await homePage.clickViewCart();

    // Assert
    await expect(homePage.page).toHaveURL(/\/view_cart/);
    await cartPage.verifyTotalPrice('Rs. 500');
    await expect(homePage.page.locator('td:has-text("Rs. 500")').first()).toBeVisible();
  });

  test('Empty Cart Message - Verify empty cart displays appropriate message', async () => {
    // Arrange & Act
    await cartPage.navigateToCart();

    // Assert
    await cartPage.verifyEmptyCart();
    await cartPage.verifyEmptyCartLink();
  });

  test('Cart Navigation - Verify Proceed To Checkout button is available', async () => {
    // Arrange
    await homePage.navigateToHomepage();

    // Act
    await homePage.addFirstProductToCart();
    await homePage.verifyAddedNotification();
    await homePage.clickViewCart();

    // Assert
    await expect(homePage.page).toHaveURL(/\/view_cart/);
    await cartPage.verifyCheckoutButtonVisible();
  });
});


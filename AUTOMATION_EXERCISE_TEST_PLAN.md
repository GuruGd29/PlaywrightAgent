# Automation Exercise Application - Comprehensive Test Plan

## Application Overview

Automation Exercise is a full-featured e-commerce website designed specifically for QA engineers to practice automation testing. The application provides realistic scenarios for web testing including user authentication, product browsing, shopping cart management, checkout flows, and contact forms.

### Key Features:
- **Product Catalog**: Browse and search products across multiple categories (Women, Men, Kids) and brands
- **User Authentication**: User registration, login, and account management
- **Shopping Cart**: Add/remove products, update quantities, manage cart items
- **Checkout Process**: Complete purchase flow with delivery and payment information
- **Product Reviews**: Write and submit product reviews
- **Contact Form**: Submit contact inquiries with file upload capability
- **Search & Filtering**: Product search, category filtering, brand filtering
- **Product Details**: View detailed information, pricing, availability, and reviews

---

## Test Scenarios

### 1. Homepage Navigation and Content Verification

#### 1.1 Verify Homepage Loads Correctly
**Steps:**
1. Navigate to https://automationexercise.com/
2. Wait for page to fully load
3. Verify page title displays "Automation Exercise"
4. Verify main logo/branding is visible

**Expected Results:**
- Homepage loads without errors
- Page title is correct
- All major UI elements are visible and properly positioned

#### 1.2 Verify Navigation Menu Items
**Steps:**
1. Navigate to homepage
2. Verify all navigation menu items are present:
   - Home
   - Products
   - Cart
   - Signup / Login
   - Test Cases
   - API Testing
   - Video Tutorials
   - Contact us
3. Click on each menu item and verify navigation

**Expected Results:**
- All menu items are clickable and accessible
- Each menu item navigates to the correct page
- Navigation is consistent across all pages

#### 1.3 Verify Featured Products Display
**Steps:**
1. Navigate to homepage
2. Verify "Features Items" section is visible
3. Verify at least 6 featured products are displayed with:
   - Product image
   - Product name
   - Price in Rs.
   - "Add to cart" button
   - "View Product" link
4. Scroll through featured products carousel

**Expected Results:**
- Featured products section displays correctly
- All product information is accurate
- Product carousel navigation works
- Images load without broken links

#### 1.4 Verify Category and Brand Sidebar
**Steps:**
1. On homepage, verify left sidebar contains:
   - Category section (Women, Men, Kids)
   - Brands section with product counts
2. Click on a category link
3. Verify brand links are clickable

**Expected Results:**
- Sidebar displays all categories
- All brands with count are listed
- Category and brand links navigate to filtered views
- Product counts are accurate

#### 1.5 Verify Subscription Form
**Steps:**
1. Scroll to footer
2. Verify subscription form is present with:
   - Email input field labeled "Your email address"
   - Subscribe button
3. Enter valid email
4. Click subscribe button

**Expected Results:**
- Email field accepts input
- Subscribe button is clickable
- Success message appears after submission

---

### 2. Product Listing and Search

#### 2.1 View All Products Page
**Steps:**
1. Click "Products" in navigation menu
2. Verify page loads with "All Products" heading
3. Verify products are displayed in grid format
4. Verify each product card contains:
   - Image
   - Price
   - Product name
   - "Add to cart" button
   - "View Product" link
5. Scroll to verify pagination

**Expected Results:**
- All Products page loads successfully
- Multiple products display correctly
- All product information is visible
- Page handles scrolling and pagination properly

#### 2.2 Product Search Functionality
**Steps:**
1. On Products page, locate search box at top
2. Enter product name (e.g., "Tshirt")
3. Click search button
4. Verify filtered results display

**Expected Results:**
- Search field accepts input
- Filtering works correctly
- Only matching products display
- Relevant results are returned

#### 2.3 Filter by Category
**Steps:**
1. On Products page, click a category (e.g., "Women")
2. Verify page filters to show only that category
3. Verify heading/title updates
4. Verify product count decreases

**Expected Results:**
- Category filter works correctly
- Only products from selected category display
- Page URL/heading reflects selection
- Filter can be reset or changed

#### 2.4 Filter by Brand
**Steps:**
1. On Products page, click a brand (e.g., "Polo")
2. Verify filtered results display only selected brand
3. Verify product count and display updates

**Expected Results:**
- Brand filter works correctly
- Only products from selected brand display
- Product information is accurate
- Filter navigation works

---

### 3. Product Details Page

#### 3.1 View Product Details
**Steps:**
1. From Products page, click "View Product" on any product
2. Verify product detail page loads
3. Verify page contains:
   - Product image
   - Product name
   - Price (Rs.)
   - Category
   - Star rating
   - Availability status
   - Condition
   - Brand name
   - Quantity selector
   - "Add to cart" button

**Expected Results:**
- Product details page loads without errors
- All product information displays correctly
- Images load properly
- Availability and condition are accurate

#### 3.2 Adjust Product Quantity
**Steps:**
1. On product details page, locate quantity selector
2. Increase quantity to 3
3. Verify quantity field updates

**Expected Results:**
- Quantity spinner works correctly
- Value updates as expected
- Can increase and decrease quantity
- Minimum and maximum values respected

#### 3.3 Add Product to Cart
**Steps:**
1. On product details page, select quantity (e.g., 2)
2. Click "Add to cart" button
3. Verify success message or notification appears

**Expected Results:**
- Add to cart button is clickable
- Success message displays
- Product is added with correct quantity
- Option to continue shopping or view cart appears

#### 3.4 Write Product Review
**Steps:**
1. On product details page, scroll to "Write Your Review" section
2. Fill in review form:
   - Your Name: "John Doe"
   - Email Address: "john@example.com"
   - Add Review Here: "Great product!"
3. Click "Submit" button

**Expected Results:**
- Review form displays all fields
- Fields accept input
- Submit button is clickable
- Success message appears after submission

---

### 4. Shopping Cart Management

#### 4.1 View Cart
**Steps:**
1. Add a product to cart (if not already done)
2. Click "Cart" in navigation menu
3. Verify cart page displays
4. Verify cart contains:
   - Product image
   - Product details
   - Price
   - Quantity
   - Total price
   - Remove button

**Expected Results:**
- Cart page loads correctly
- All added products display
- Product information is accurate
- Cart total calculates correctly

#### 4.2 Update Quantity in Cart
**Steps:**
1. On cart page, locate quantity field for a product
2. Change quantity to 5
3. Verify total price updates

**Expected Results:**
- Quantity field allows editing
- Total price recalculates automatically
- Cart subtotal updates accordingly

#### 4.3 Remove Product from Cart
**Steps:**
1. On cart page, click "Remove" button for a product
2. Verify product is removed from cart
3. Verify cart totals update

**Expected Results:**
- Remove button is clickable
- Product is removed immediately
- Cart totals recalculate
- Page updates without reload

#### 4.4 Continue Shopping from Cart
**Steps:**
1. On cart page, click "Continue Shopping" button (if available)
2. Verify user returns to products page
3. Verify previous cart items are preserved

**Expected Results:**
- Navigation button works correctly
- User can continue shopping
- Cart items are retained

---

### 5. User Authentication

#### 5.1 User Registration
**Steps:**
1. Click "Signup / Login" in navigation
2. On login page, fill signup form:
   - Name: "Jane Smith"
   - Email: "jane.smith@example.com"
3. Click "Signup" button

**Expected Results:**
- Login page loads with both login and signup forms
- Signup form accepts input
- Form validation triggers if required
- Success or error message displays

#### 5.2 Login with Valid Credentials
**Steps:**
1. On login page, fill login form:
   - Email: "jane.smith@example.com"
   - Password: "Password123"
2. Click "Login" button

**Expected Results:**
- Login form accepts email and password
- Login processes successfully
- User is logged in and redirected
- Username appears in navigation (if applicable)

#### 5.3 Login with Invalid Credentials
**Steps:**
1. On login page, enter invalid credentials:
   - Email: "invalid@example.com"
   - Password: "wrongpass"
2. Click "Login" button

**Expected Results:**
- Error message displays
- User is not logged in
- User remains on login page
- Form fields are preserved

#### 5.4 Logout
**Steps:**
1. As logged-in user, find logout option (usually in header/menu)
2. Click logout

**Expected Results:**
- User is logged out successfully
- Redirected to home page or login page
- Navigation reflects logged-out state

---

### 6. Checkout Process

#### 6.1 Proceed to Checkout
**Steps:**
1. Add products to cart
2. Go to cart page
3. Click "Proceed To Checkout" button (if logged in)
4. Verify checkout page loads

**Expected Results:**
- Checkout button is available
- Checkout page loads correctly
- Order summary displays
- Delivery address form appears

#### 6.2 Enter Delivery Address
**Steps:**
1. On checkout page, fill delivery address form:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john.doe@example.com"
   - Address: "123 Main Street"
   - City: "New York"
   - State: "NY"
   - Zipcode: "10001"
   - Country: "United States"
   - Phone: "5551234567"
2. Click "Continue" or next button

**Expected Results:**
- Form accepts all inputs
- All required fields are marked
- Form validates correctly
- Navigation to next step works

#### 6.3 Verify Order Review
**Steps:**
1. After entering address, verify order review page shows:
   - Cart items and quantities
   - Delivery address
   - Order total
   - Payment method options

**Expected Results:**
- Order summary is accurate
- All items display correctly
- Totals match cart calculations
- Review page is complete

#### 6.4 Complete Purchase
**Steps:**
1. On order review page, click "Place Order" button
2. Enter payment details (if applicable)
3. Complete payment process

**Expected Results:**
- Payment page appears or payment processes
- Success message displays
- Order confirmation shows order number
- User receives confirmation (email if available)

---

### 7. Contact Us Form

#### 7.1 Access Contact Form
**Steps:**
1. Click "Contact us" in navigation
2. Verify contact page loads
3. Verify "Get In Touch" form displays

**Expected Results:**
- Contact page loads without errors
- Contact form is visible
- All form fields are accessible

#### 7.2 Submit Contact Form
**Steps:**
1. On contact page, fill out form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Subject: "Test Inquiry"
   - Your Message: "This is a test message"
2. Click "Submit" button

**Expected Results:**
- Form accepts all inputs
- All fields are visible and editable
- Submit button is clickable
- Success message or confirmation appears

#### 7.3 File Upload in Contact Form
**Steps:**
1. On contact form, click "Choose File" button
2. Select a file from system
3. Verify file is selected

**Expected Results:**
- File upload dialog opens
- File can be selected
- Selected filename appears in form
- Form can be submitted with attachment

#### 7.4 Contact Form Validation
**Steps:**
1. On contact form, attempt to submit with empty fields
2. Verify validation messages appear

**Expected Results:**
- Required field validation works
- Error messages display clearly
- User cannot submit incomplete form
- Form highlights missing required fields

---

### 8. Edge Cases and Error Handling

#### 8.1 Invalid Product ID Access
**Steps:**
1. Manually navigate to product details with invalid ID:
   - /product_details/99999
2. Verify error handling

**Expected Results:**
- Error message appears
- User is redirected to products page
- No application crash occurs
- Error is user-friendly

#### 8.2 Empty Cart Checkout
**Steps:**
1. Empty cart completely
2. Attempt to proceed to checkout

**Expected Results:**
- Checkout button is disabled or unavailable
- Error message appears if attempted
- User is prompted to add items

#### 8.3 Session Timeout Handling
**Steps:**
1. Login to account
2. Wait for session timeout or clear cookies
3. Attempt to access protected page

**Expected Results:**
- User is redirected to login
- Session is properly terminated
- No data loss occurs
- Clear message about session expiry appears

#### 8.4 Special Characters in Search
**Steps:**
1. Use search field with special characters:
   - "<script>alert('test')</script>"
   - "'; DROP TABLE--"
2. Verify application handles safely

**Expected Results:**
- Special characters are handled safely
- No errors occur
- Search returns results or no results appropriately
- Application remains secure

---

### 9. Browser Compatibility and Responsiveness

#### 9.1 Cross-Browser Testing
**Steps:**
1. Test application in:
   - Chrome
   - Firefox
   - Safari
   - Edge
2. Verify all functionality works consistently

**Expected Results:**
- Application works in all major browsers
- UI displays correctly in each browser
- No console errors appear
- Performance is acceptable

#### 9.2 Responsive Design - Mobile
**Steps:**
1. Open application in mobile browser/viewport (width: 375px)
2. Verify:
   - Navigation adapts (hamburger menu if applicable)
   - Products display in single column
   - Forms are usable on small screen
   - Images scale appropriately

**Expected Results:**
- Mobile layout is responsive
- All elements are accessible
- Touch targets are appropriately sized
- No horizontal scrolling required

#### 9.3 Responsive Design - Tablet
**Steps:**
1. Open application in tablet viewport (width: 768px)
2. Verify:
   - Layout adapts properly
   - Products display in 2-3 columns
   - Navigation is accessible
   - All functionality works

**Expected Results:**
- Tablet layout is properly formatted
- All elements are visible and accessible
- Touch interactions work correctly

---

### 10. Performance and Load Testing

#### 10.1 Homepage Load Time
**Steps:**
1. Navigate to homepage
2. Measure time until page is fully loaded
3. Verify acceptable load time (< 3 seconds)

**Expected Results:**
- Homepage loads quickly
- All images are optimized
- No broken resources

#### 10.2 Product Page Load Performance
**Steps:**
1. Navigate to products page with all products loaded
2. Verify page remains responsive
3. Check memory usage does not spike

**Expected Results:**
- Page loads efficiently even with many products
- Pagination or lazy loading works
- Scrolling is smooth

#### 10.3 Large Cart Performance
**Steps:**
1. Add 50+ items to cart
2. Open cart page
3. Verify page loads and remains responsive

**Expected Results:**
- Cart page handles many items
- No lag or performance issues
- All functionality remains available

---

### 11. Data Validation

#### 11.1 Email Format Validation
**Steps:**
1. In any form with email field, enter invalid email:
   - "notanemail"
   - "test@"
   - "@example.com"
2. Verify validation error appears

**Expected Results:**
- Invalid email formats are rejected
- Clear error message displays
- Form prevents submission with invalid email

#### 11.2 Numeric Field Validation
**Steps:**
1. In quantity field, attempt to enter:
   - Negative numbers: "-5"
   - Non-numeric: "abc"
   - Decimals: "1.5"
2. Verify validation

**Expected Results:**
- Only valid positive integers accepted
- Invalid entries are rejected
- Spinner controls enforce valid range

#### 11.3 Required Field Validation
**Steps:**
1. In any form (login, checkout, contact), skip required fields
2. Attempt to submit
3. Verify validation messages

**Expected Results:**
- All required fields are validated
- Clear messages indicate missing fields
- Form submission is prevented
- Focus moves to first invalid field

---

### 12. Security Considerations

#### 12.1 Password Security
**Steps:**
1. During registration, verify password field:
   - Accepts secure characters
   - Masks input with dots/asterisks
   - Does not display password in URL
2. Check password requirements (if any)

**Expected Results:**
- Password field properly masks input
- Password is not transmitted in plain text
- Password requirements are enforced
- No password hints in form

#### 12.2 CSRF Protection
**Steps:**
1. Submit forms and monitor for CSRF tokens
2. Verify proper token handling

**Expected Results:**
- Forms include CSRF protection
- Tokens are validated on submission

#### 12.3 SQL Injection Prevention
**Steps:**
1. In search and form fields, enter SQL injection attempts:
   - "'; DROP TABLE users--"
   - "1' OR '1'='1"
2. Verify application handles safely

**Expected Results:**
- SQL injection attempts are blocked
- Input is properly escaped
- No errors expose database structure
- Application remains stable

---

## Test Execution Notes

### Prerequisites
- Fresh browser session for each test suite
- Clear cookies and cache between tests
- Use valid test data (email addresses, payment info if applicable)
- Take screenshots of any failures

### Environmental Setup
- **Test Environment**: https://automationexercise.com/
- **Test Data**: Use unique test data to avoid conflicts
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Devices**: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)

### Pass/Fail Criteria
- **Pass**: Feature works as described, no errors, user can complete flow
- **Fail**: Feature doesn't work, errors appear, user cannot complete flow
- **Blocked**: Cannot test due to prerequisite failure

### Reporting
- Document all failures with:
  - Screenshot
  - Step where failure occurred
  - Actual vs. expected result
  - Environment details (browser, OS, viewport)
  - Reproducibility steps

---

## Known Limitations

- Some features may require valid payment methods for complete testing
- API responses may be mocked in test environment
- Third-party integrations may not be fully functional
- Some sections marked "for testing purposes only"

---

**Test Plan Version**: 1.0
**Created**: November 2025
**Last Updated**: November 2025

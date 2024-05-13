# Xomato-FoodDelivery

## Introduction

Welcome to Xomato, a food delivery website that aims to provide a seamless experience for users to order their favorite meals from the comfort of their homes. Xomato offers a wide range of cuisines, easy navigation, secure payment options, and efficient order tracking. Whether you're craving Italian pasta or Asian stir-fry, Xomato has something for everyone.

## Features

### User Side

1. **Homepage Display:**

   - Upon visiting the website, users are greeted with an intuitive homepage showcasing various food categories and featured items.

2. **Sign In/Sign Up:**

   - Users can sign in or sign up using their credentials.
   - The sign-in page includes validation checks to ensure accurate data entry.

3. **Logout/Login:**

   - Users can log out and log in to their accounts seamlessly.

4. **Browsing and Selecting Food Items:**

   - Users can browse through different food categories and select items to add to their cart.

5. **Cart Management:**

   - Users can view their cart, remove items, and proceed to the payment option.

6. **Address and Contact Details:**

   - Users are required to fill up their delivery address and phone number.
   - If any field is not filled, the payment option won't be accessible.

7. **Secure Payment via Stripe:**

   - Xomato utilizes Stripe for secure payment processing.
   - Users can fill in their card details using a dummy card number and make payments.

8. **Order Tracking:**
   - After successful payment, users are redirected to the 'My Orders' page.
   - From here, users can track their orders using the 'Track Order' button.

### Admin Side

1. **Order Management:**

   - Admins can check and update order details from the orders page.
   - This feature ensures efficient handling and processing of orders.

2. **Add New Food Items:**

   - Admins have the capability to add new food items according to categories from the 'Add Item' page.
   - This allows for easy expansion and updating of the menu.

3. **View and Remove Items:**
   - Admins can view and remove items from the item list page.
   - This feature facilitates inventory management and menu adjustments.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Payment Gateway: Stripe

## Getting Started

To run the Xomato website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and Stripe account.
4. Configure environment variables for MongoDB URI and Stripe API keys.
5. Run the application using `npm start`.

## Contributing

Contributions are welcome! If you have any suggestions or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

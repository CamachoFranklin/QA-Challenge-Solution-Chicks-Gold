/// <reference types="cypress" />

// Import the classes that handle the login and redirection pages
import { LoginPage } from "../methods/challenge-login-page"; // Login page
import { Redirections } from "../methods/challenge-redirection-page"; // Redirection page

describe('Redirections and Titles Validations', () => {

    // Check that redirection to the Login page and its title are correct
    it('Visit Login page and check title validation', function() {
        Redirections.visitURL(); // Visit the main page
        Redirections.clickLogin(); // Click on the login option
        Redirections.validatePageTitle('Login'); // Verify that the page title is 'Login'
    })

    // Check that redirection to the Dashboard page and its title are correct
    it('Visit Dashboard page and check title validation', function() {
        Redirections.visitURL(); // Visit the main page
        Redirections.clickDashboard(); // Click on the dashboard option
        Redirections.validatePageTitle('Dashboard'); // Verify that the page title is 'Dashboard'
        Redirections.validateMessage('Welcome to the user dashboard!'); // Verify that the welcome message is present
    })

    // Check that redirection to the Products page and its title are correct
    it('Visit Products page and check title validation', function() {
        Redirections.visitURL(); // Visit the main page
        Redirections.clickProducts(); // Click on the products option
        Redirections.validatePageTitle('Product List'); // Verify that the page title is 'Product List'
    })

    // Check that redirection to the Orders page and its title are correct
    it('Visit Orders page and check title validation', function() {
        Redirections.visitURL(); // Visit the main page
        Redirections.clickOrders(); // Click on the orders option
        Redirections.validatePageTitle('Order List'); // Verify that the page title is 'Order List'
    })
    
})

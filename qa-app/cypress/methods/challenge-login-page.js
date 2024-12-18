/// <reference types="cypress" />

// Importing the selectors for the login page.
import { LoginSelectors } from "../support/selectors/challenge-login-selectors";

// Class representing the login page actions.
export class LoginPage {
    

    // Method to enter the username into the username input field.
    static inputUsername(username) {
        cy.get(LoginSelectors.usernameInput).clear().type(username);
    }

    // Method to enter the password into the password input field.
    static inputPassword(password) {
        cy.get(LoginSelectors.passwordInput).clear().type(password);
    }

    // Method to click the login action button.
    static pressLoginButton() {
        cy.get(LoginSelectors.loginActionButton).click();
    }
}

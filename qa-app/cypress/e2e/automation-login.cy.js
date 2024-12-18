/// <reference types="cypress" />

// Importing the LoginPage and Redirections page objects for easier interaction with the UI elements.
import { LoginPage } from "../methods/challenge-login-page";
import { Redirections } from "../methods/challenge-redirection-page";

describe('Login Validations', () => {

    // Context for successful login scenario.
    context('Login successful', () => {

        // Test for valid credentials (this should pass).
        it('TC-Login001: Valid credentials', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser');
            LoginPage.inputPassword('password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Logged in with token: sampletoken');
        });
    });

    // Context for failed login scenarios.
    context('Login failed', () => {

        // Test for invalid username with valid password.
        it('TC-Login002: Invalid username with valid password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('wrongusername');
            LoginPage.inputPassword('password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for valid username with invalid password.
        it('TC-Login003: Valid username with invalid password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser');
            LoginPage.inputPassword('wrongpassword');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for both username and password invalid.
        it('TC-Login004: Both username and password invalid', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('wrongusername');
            LoginPage.inputPassword('wrongpassword');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for both fields empty.
        it('TC-Login005: Both fields empty', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername(' ');
            LoginPage.inputPassword(' ');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for empty username with valid password.
        it('TC-Login006: Empty username, valid password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername(' ');
            LoginPage.inputPassword('password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for empty username with invalid password.
        it('TC-Login007: Empty username, invalid password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername(' ');
            LoginPage.inputPassword('wrongpassword');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for valid username with empty password.
        it('TC-Login008: Valid username, empty password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser');
            LoginPage.inputPassword(' ');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for invalid username with empty password.
        it('TC-Login009: Invalid username, empty password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('wrongusername');
            LoginPage.inputPassword(' ');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for password with special characters and normal username.
        it('TC-Login010: Password with special characters and normal username', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser');
            LoginPage.inputPassword('password!@#');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for username with special characters and normal password.
        it('TC-Login011: Username with special characters and normal password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser!@#');
            LoginPage.inputPassword('password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for username with uppercase letters and normal password.
        it('TC-Login012: Username with uppercase letters and normal password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('TestUser');
            LoginPage.inputPassword('password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });

        // Test for password with uppercase letters and normal username.
        it('TC-Login013: Password with uppercase letters and normal username', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.inputUsername('testuser');
            LoginPage.inputPassword('Password');
            LoginPage.pressLoginButton();
            Redirections.validateMessage('Login failed');
        });
    });
});

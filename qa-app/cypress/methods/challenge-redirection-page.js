/// <reference types="cypress" />

import { RedirectionsSelectors } from "../support/selectors/challenge-redirections-selectors";

export class Redirections {
    
    static visitURL() {
        cy.visit('http://localhost:3000/');
    }

    static clickLogin() {
        cy.get(RedirectionsSelectors.loginLink).click();
        cy.url().should('contain', '/login')
    }

    static clickDashboard() {
        cy.get(RedirectionsSelectors.dashboardLink).click();
        cy.url().should('contain', '/dashboard')
    }

    static clickProducts() {
        cy.get(RedirectionsSelectors.productsLink).click();
        cy.url().should('contain', '/products')
    }

    static clickOrders() {
        cy.get(RedirectionsSelectors.ordersLink).click();
        cy.url().should('contain', '/orders')
    }

    static validatePageTitle(title) {
        cy.get(RedirectionsSelectors.pageTitle).should('contain', title);
    } 

    static validateMessage(text) {
        cy.get(RedirectionsSelectors.validationMessage).should('contain', text);
    }
}
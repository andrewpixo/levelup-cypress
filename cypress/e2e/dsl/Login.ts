import DSL from './DSL';

export default class Login extends DSL {
    public visit() {
        super.visit('account/login', false);
    }

    public loginWithBadCredentials() {
        cy.get('#username').type('not_a_username');
        cy.get('#password').type('not_a_password');
        cy.get('#submit').click();
    }

    public assertThatLoginSucceeds() {
        cy.get('.parks-page-template').contains('System Home').should('be.visible');
    }

    public assertThatLoginFails() {
        cy.contains('Invalid username or password').should('be.visible');
    }
}

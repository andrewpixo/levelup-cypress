import LoginPage from './dsl/Login';

describe('Login', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('Can log in when given valid credentials', () => {
        loginPage.login();
        loginPage.assertThatLoginSucceeds();

        cy.get('[data-testid=MenuIcon]').click();
        cy.get('[href="/accounting"]').click();
        cy.get('[href="/accounting/clients"]').click();
        cy.get('#input-parks-data-table-search-Search').type('Williams');
        cy.contains('Williams').should('be.visible');

        cy.get('idontexistanywhereinhere').should('exist');

        cy.contains('View').click();
        cy.contains('Edit').click();

        const random = Math.floor(Math.random() * 100000);

        cy.get('#client-name')
            .tab()
            .tab()
            .type('{selectAll}{backspace}whateveryouwant' + random);
        cy.contains('Save').click();
        cy.contains('whateveryouwant' + random).should('be.visible');
    });
});

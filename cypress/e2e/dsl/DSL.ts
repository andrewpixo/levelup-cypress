import {join} from 'path';

export default abstract class DSL {
    private readonly baseUrl: string = `http://localhost:4200`;

    public visit(suffix?: string, logInBefore: boolean = true) {
        if (logInBefore) this.login();

        if (!suffix) return;
        const path = join(suffix);

        cy.visit(path);
    }

    public login() {
        cy.visit('account/login');
        cy.get('#username').type('parks@pixotech.com');
        cy.get('#password').type('Chicken1!');
        cy.get('#submit').click();
    }

    public logout() {
        cy.url().then(url => {
            if (!url.includes('account/login')) cy.contains('LOGOUT').click();
        });
    }
}

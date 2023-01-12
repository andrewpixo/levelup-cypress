import ClientPage from './dsl/Client';

describe('Editing a client', () => {
    const clientPage = new ClientPage();

    it('should be able to edit a client', () => {
        clientPage.visit();
    });
});

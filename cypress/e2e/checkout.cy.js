describe('Usuário logado na página de dashboard', () => {
    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
    });

    context('Redirecionamento na página de dashboard', () => {
        it('Verifica página de redirecionamento no login com sucesso', () => {
            cy.location('pathname').should('eq', '/inventory.html');
        });
    });
});
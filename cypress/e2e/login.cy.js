describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/login");
    });

    context('header', ()=>{
        it('contains login',()=>{
            cy.get('h1.mb-4').contains('Login')
        })
      })

      context("input section", () => {
        it("gets the input name form", () => {
          cy.getByData("email").type("tobi@gmail.com");
          cy.getByData("password").type("12345");
          cy.get(".btn").click();
          cy.visit("http://localhost:3000/dashboard");
        });
      });
});  
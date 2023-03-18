describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  context('header', ()=>{
    it('contains register',()=>{
        cy.get('h1.mb-4').contains('Register')
    })
  })

  context("input section", () => {
    it("gets the input name form", () => {
      cy.getByData("name").type("tobiloba");
      cy.getByData("email").type("tobi@gmail.com");
      cy.getByData("password").type("12345");
      cy.get(".btn").click();
    //   cy.location("pathname").should("eq",
    //   'http://localhost:3000/login'
    //   )
    });
  });
});

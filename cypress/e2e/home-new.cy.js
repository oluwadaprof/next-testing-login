describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check if there is h1 there", () => {
    cy.get(`.navbar-brand`).contains("Next.13 Authentication");
  });

  it.only("the first a tag", () => {
    cy.visit("http://localhost:3000");
    cy.get("a.nav-link").eq(0).contains("Login");
  });
});

/// <reference types="Cypress" />

describe("El Villanense", () => {
  it("homepage can be visited", () => {
    cy.visit("/");

    cy.get(".logo").should("contain", "El Villanense");
  });

  it("locales section can be visited", () => {
    cy.visit("/");

    cy.contains("Locales").click();

    cy.url().should("include", "/locales");

    cy.get(".section-title").should("contain", "Noticias Locales");
  });

  it("login page can be visited and login can be done", () => {
    cy.visit("/login");

    cy.url().should("include", "/login");

    cy.get("input[name=email]").type(Cypress.env("user_email"));

    cy.get("input[name=password]").type(Cypress.env("user_password"), {
      log: false,
    });

    cy.get("button[type=submit]").click();

    cy.url().should("include", "/admin");

    cy.get(".title-new-article").should("contain", "Nuevo artículo");
  });
});

/// <reference types="Cypress" />

describe("E2E test El Villanense", () => {
  it("e2e", () => {
    cy.visit("/");

    cy.contains("Locales").click();

    cy.url().should("include", "/locales");

    cy.get("h1").should("contain", "Noticias Locales");

    cy.visit("/login");

    cy.get("input[name=email]").type(Cypress.env("user_email"));

    cy.get("input[name=password]").type(Cypress.env("user_password"), {
      log: false,
    });

    cy.contains("Ingresar").click();

    cy.url().should("include", "/admin");

    cy.get("h1").should("contain", "Nuevo artículo");
  });
});

/// <reference types="Cypress" />

describe("My App", () => {
  it("Visit Homepage", () => {
    cy.visit("/");

    cy.contains("Locales").click();

    cy.url().should("include", "/locales");
  });
});

import { path } from "lodash/fp"

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("contains correct hero heading", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("contains correct feature list", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
    })
  })

  context("Courses section", () => {
    it("Course: Testing your first next.js application", () => {
      cy.getByData("course-0").find("a").eq(3).click()

      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Course: Testing foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()

      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Testing foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()

      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Cypress fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()

      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})

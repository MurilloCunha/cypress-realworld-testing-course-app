describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

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

beforeEach(function () {
  if (this.currentTest._testConfig.unverifiedTestConfig.skipBeforeEach) {
    cy.log('skipping beforeEach hook')
    return
  }
  cy.log('**beforeEach**')
})

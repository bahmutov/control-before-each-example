/// <reference types="cypress" />

it('runs a normal test', () => {
  expect(1).to.equal(1)
})

it(
  'avoids beforeEach hook in the support file',
  { skipBeforeEach: true },
  () => {
    expect(1).to.equal(1)
  },
)

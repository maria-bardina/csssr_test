describe('Test task', function() {
  it('check that link is right', function() {
    cy.visit('http://blog.csssr.ru/qa-engineer/')
    cy.get('a')
      .eq(1)
     .click()
    cy.scrollTo('bottomRight')
    cy.contains('Софт для быстрого создания скриншотов')
      .click()
     .should('have.attr', 'href', 'http://monosnap.com/')
  })
})
/// <reference types ="cypress" />

it ('Login test process',function(){

    cy.visit('https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register')
    cy.get('[placeholder=Username]').type('baakkrr')
    cy.get('[placeholder=Email]').type('baakkrr@gmail.com')
    cy.get('[placeholder=Password]').type('123456789')
    cy.get('.btn').contains('Sign up').should('be.visible').click()
    cy.wait(3000)
    cy.contains('Settings').should('be.visible').click()
    cy.wait(3000)
    cy.get('.btn-outline-danger').contains('Or click here to logout.').should('be.visible').click()
    cy.wait(3000)
    cy.contains('Sign up').should('be.visible').click()
    cy.get('[placeholder=Username]').type('baakkrr')
    cy.get('[placeholder=Email]').type('baakkrr@gmail.com')
    cy.get('[placeholder=Password]').type('123456789')
    cy.get('.btn').contains('Sign up').should('be.visible').click()

})

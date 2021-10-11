/// <reference types ="cypress" />

it ('login test',function(){

    cy.visit('https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/register')
    cy.get('[placeholder=Username]').type('bakeeeerrr')
    cy.get('[placeholder=Email]').type('bakeeeeerrrr@gmail.com')
    cy.get('[placeholder=Password]').type('123456789')
    cy.get('.btn').click()
    cy.get('[show-authed="true"] > :nth-child(3) > .nav-link').click()
    cy.get('.btn-outline-danger').click()
    cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').click()
    cy.get('[placeholder=Username]').type('bakeeeerrr')
    cy.get('[placeholder=Email]').type('bakeeeeerrrr@gmail.com')
    cy.get('[placeholder=Password]').type('123456789')
    cy.get('.btn').click()



})

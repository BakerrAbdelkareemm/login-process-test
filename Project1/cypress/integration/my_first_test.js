/// <reference types ="cypress" />


/*
it ('google test',function(){

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation step by step{enter}')
  //cy.get('[href="https://www.youtube.com/channel/UCTt7pyY-o0eltq14glaG5dg"] > .LC20lb > span').click()
  //cy.wait(1000)
  //cy.contains('فيديو').click()
})
*/
it ('login test',function(){

    cy.visit('https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login')
    cy.get(':nth-child(2) > .form-control').type('bakerbaker@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('123456789')
    cy.get('.btn').click()

})

it ('login test',function(){

    cy.visit('https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login')
    cy.get(':nth-child(2) > .form-control').type('bakerbaker@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('12345')
    cy.get('.btn').click()

})

it ('login test',function(){

    cy.visit('https://demo.realworld.io/?fbclid=IwAR3DDj55wxw_ip5DwIFQGo4N2s7pQH27vuRfpHkFnd4l_erwueQqiHsrWZI#/login')
    cy.get(':nth-child(2) > .form-control').type('b@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('123456789')
    cy.get('.btn').click()

})


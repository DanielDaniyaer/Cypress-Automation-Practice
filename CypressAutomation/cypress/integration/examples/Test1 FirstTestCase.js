//cypress - Spec 

/// <reference types="Cypress"/>

describe('My First Test Suite',function(){

    it('My First Test Case', function(){

        cy.visit( Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('CART').click()
        cy.get('.products').find('.product').each(($el)=>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        const logo = cy.get('.brand')


       })

    // it('My Second Test Case', function(){

    // })
})
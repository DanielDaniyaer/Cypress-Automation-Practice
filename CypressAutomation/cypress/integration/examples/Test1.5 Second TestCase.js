//cypress - Spec 

/// <reference types="Cypress"/>

describe('My Second Test Suite',function(){

    it('My Second Test Case', function(){

        cy.visit( Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('CART').click()
        cy.get('@productLocator').find('.product').each(($el)=>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })
        cy.get('.tada').click()
        cy.get('.cart-preview > .action-block > button').click()
        cy.get(':nth-child(14)').click()

       })

    // it('My Second Test Case', function(){

    // })
})
//cypress - Spec 

/// <reference types="Cypress"/>

describe('My Second Test Suite',function(){

    it('My Second Test Case', function(){

        
        cy.visit( Cypress.env('url')+"/AutomationPractice/")

      //  cy.get('.mouse-hover-content').invoke('show')
    //  cy.contains('Top').click()

      //force click
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

        
})
})
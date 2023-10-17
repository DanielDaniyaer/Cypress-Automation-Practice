//cypress - Spec 

/// <reference types="Cypress"/>

describe('My Second Test Suite',function(){

    it('My Second Test Case', function(){

        
        cy.visit( Cypress.env('url')+"/AutomationPractice/")
      cy.get('#opentab').then(function(el){
        const newurl = el.prop('herf')
      })


        
})
})
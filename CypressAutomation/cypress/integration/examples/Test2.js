//cypress - Spec 

/// <reference types="Cypress"/>

describe('My Second Test Suite',function(){

    it('My Second Test Case', function(){

        //check boxes
        cy.visit( Cypress.env('url')+"/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==="India"){
                cy.wrap($el).click()
            }
        })

        //autocomplete
        cy.get('#autocomplete').should('have.value','India')
        //visible,unvisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('input[value="radio2"]').check().should('be.checked')

        //popup(alert)
        cy.get('#alertbtn').click()
        cy.get('input[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        
        cy.get('#opentab').invoke('removeAttr','target').click()
 //       cy.url().should('include','qaclickacademy')
  //      cy.go('back')

})
})
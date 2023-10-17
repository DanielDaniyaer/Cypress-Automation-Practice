class ShopPage{

    getCartBtn(){
      return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
        }
    
    getCountry(){
        return cy.get('#country')
    }

    getCartCheckOutBtn(){
        return cy.get(':nth-child(4) > :nth-child(5)')
    }

    getTermConCheckbox(){
        return cy.get('#checkbox2')
    }

    getPurchaseBtn(){
        return cy.get('input[value="Purchase"]')
    }

    getAlertText(){
        return cy.get('.alert')
    }

    getIteamsInCart(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalValueInCart(){
        return cy.get('h3 strong')
    }

}

export default ShopPage
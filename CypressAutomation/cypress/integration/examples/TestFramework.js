
/// <reference types="Cypress"/>
import HomePage from "../PageObjects/HomePage"
import ShopPage from "../PageObjects/ShopPage"

describe('My Second Test Suite',function(){

    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })

    })

    it('My Second Test Case', function(){
        const homePage = new HomePage()
        const shopPage = new ShopPage()

    //    Cypress.env('url')

        cy.visit( Cypress.env('url')+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender).should('have.contain','Female')
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneurButton().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
        cy.selectProduct(element)
        })

        shopPage.getCartBtn().click({force:true})

        var sum=0
        shopPage.getIteamsInCart().each(($el,index,$list)=>{
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
        })
        shopPage.getTotalValueInCart().then(function(element){
            const totalAmount = element.text()
            var total = totalAmount.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })


        shopPage.getCartCheckOutBtn().click()
        shopPage.getCountry().type('India')
        cy.get('.suggestions > ul > li > a').click()
        shopPage.getTermConCheckbox().check({force:true})
        shopPage.getPurchaseBtn().click()
        shopPage.getAlertText().should('have.contain',' Thank you')
        shopPage.getAlertText().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })






})
})
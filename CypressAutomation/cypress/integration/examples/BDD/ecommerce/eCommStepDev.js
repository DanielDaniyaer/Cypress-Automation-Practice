/// <reference types="Cypress"/>
import HomePage from "../../../PageObjects/HomePage"
import ShopPage from "../../../PageObjects/ShopPage"

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage()
const shopPage = new ShopPage()
let name

Given('I open Ecommerce Page',()=>{
    cy.visit( Cypress.env('url')+'/angularpractice/')
})

When('I add Items to Cart',function(){
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element){
    cy.selectProduct(element)
    })

    shopPage.getCartBtn().click({force:true})
})

When('Validate the total prices',()=>{
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

})

Then('select the country submit and verify Thankyou',()=>{
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

When('I fill the form details',function(dataTable){
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behaviour',()=>{
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneurButton().should('be.disabled')
})

Then('select the Shop Page',()=>{
    homePage.getShopTab().click()
})
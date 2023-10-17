/// <reference types = "Cypress"/>

describe('My Test',function(){

    // it('My Test Case',function(){
    //     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    //     cy.get("button[class='btn btn-primary']").click()

    //     cy.intercept({
    //         method:'GET',
    //         url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

    //     },
    //     {
    //         statusCode:200,
    //         body:[{
    //             "book_name":"RestAssured with Java",
    //             "isbn":"RSU",
    //             "aisle":"2301"
    //         }]
    //     }).as('bookretrievals')
    //     cy.wait('@bookretrievals')


    // })

    it('My FirstTest case',function() {
 
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
     
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
     
        req.continue((res)=>
        {
           // expect(res.statusCode).to.equal(403)
        })
     }
     ).as("dummyUrl")
     
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@dummyUrl')
     
    })
     
    
})
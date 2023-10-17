describe("HTTP Requests",()=>{

    it("Get Call", ()=>{

        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);

    })

    it("POST Call",()=>{

        cy.request({

            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                 title:"Test post",
                 body:"This is post call",
                 userId:1
            }
        })
        .its('status')
        .should('equal',201);

    })

    it("PUT call",()=>{
        
        cy.request({

            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                 title:"Test post - Update",
                 body:"This is put call",
                 userId:1,
                 id:1
            }
        })
        .its('status')
        .should('equal',200);
    })

    it("Delete Call",()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200);
    })

})
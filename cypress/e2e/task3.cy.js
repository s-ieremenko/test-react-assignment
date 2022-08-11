///<reference types="cypress" />

describe('task3 table', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should display modal when "More information" button is clicked ', () => {
        cy.contains('button', 'More information').click()
        cy.contains('Close').should('be.visible')

        cy.get('ul> li').should(($lis) => {
            expect($lis).to.have.length(5)
            expect($lis.eq(0)).to.contain('Identification number')
            expect($lis.eq(1)).to.contain('First name')
            expect($lis.eq(2)).to.contain('Last name')
            expect($lis.eq(3)).to.contain('Birth date')
            expect($lis.eq(4)).to.contain('Gender')
        })
    })

    it('should close modal when "Close" button is clicked ', () => {
        cy.contains('button', 'More information').click()
        cy.contains('button', 'Close').click()
        cy.get('#modalWindow').should('not.exist')
    })
})

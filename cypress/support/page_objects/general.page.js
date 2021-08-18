class GeneralPage {

    getPrimaryHeader() {
        return cy.get('[data-test-id=HEADLINE_FIRST]')
    }

    getSecondaryHeader() {
        return cy.get('[data-test-id=HEADLINE_SECOND]')
    }

    getExpirationDate() {
        return cy.get('[data-test-id=EXPIRATION_DATE]')
    }
}

export default GeneralPage
class SportPage {

    visit() {
        cy.visit('/home')
    }

    openShowsCategory() {
        cy.get('[data-test-id=HEADER_NAVIGATION_ITEM_LINK]').contains('SPORTS').click()
        cy.get('[data-test-id=SPORTS-MENU-LIST-ITEM').contains('Shows').click()
    }

    getRailHeader() {
        return cy.get('h2').eq(2)
    }
}

export default SportPage
class HomePage {

    visit() {
        cy.visit('/home')
    }

    clickNext() {
        cy.get('.slick-next')
            .first()
            .click()
    }

    clickPrevious() {
        return cy.get('.slick-prev')
    }

    getNavigationText() {
        return cy.get('[data-test-id=HEADER_NAVIGATION_ITEM_LINK]')
    }

    selectItem() {
        cy.get('[data-test-id=TILE_TITLE]').eq(4).click()
    }

}

export default HomePage
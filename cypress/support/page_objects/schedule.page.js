class SchedulePage {

    visit() {
        cy.visit('/schedule')
    }

    clickOnDate() {
        cy.get('[title=2021-08-23]').click()
    }

    getShowName() {
        return cy.get('[data-test-id=TILE_TITLE]')
    }

    clickFilterSelection() {
        cy.get('[data-test-id=SPORTFILTER_BUTTON]').click()
    }

    clickDocsFilter() {
        cy.get('[data-test-id=SPORTFILTER_LIST_ITEM]').contains('Documentaries').click()
    }

    checkFilterCount() {
        return cy.get('[data-test-id=SPORT_FILTER_COUNT]')
    }

    checkGridMessage() {
       return cy.get('[data-test-id=GRID_MESSAGE]')
    }
}

export default SchedulePage
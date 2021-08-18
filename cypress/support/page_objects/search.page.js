class SearchPage {

    visit() {
        cy.visit('/search')
    }

    searchFor(query) {
        cy.get('[data-test-id=SEARCH_INPUT]').type(query)
    }

    selectFeaturesCategory() {
        cy.get('[data-category=searchCategory_features]').contains('Features').click()
    }

    getResultsTileTitle() {
        return cy.get('[data-test-id=TILE_TITLE]')
    }
}

export default SearchPage
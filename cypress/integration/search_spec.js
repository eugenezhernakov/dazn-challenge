import SearchPage from "../support/page_objects/search.page"

describe('Search page', () => {
    const search = new SearchPage()

    it('should open the search page', () => {
        search.visit()
        cy.url().should('include', '/search')
    })

    it('should search for "boxing" as a query', () => {
        search.searchFor('boxing')
    })

    it('should select the Features filter tab', () => {
        search.selectFeaturesCategory()
    })

    it('should contain content relating to Jake Paul', () => {
        search.getResultsTileTitle().eq(1).should('have.text', 'Jake Paul: One of Boxing\'s Biggest Stars?')
    })

})
import SportPage from '../support/page_objects/sport.page'
import GeneralPage from '../support/page_objects/general.page'

describe('Sports page', () => {
    const sports = new SportPage()
    const general = new GeneralPage()

    it('should open home page and navigate into Sports > Shows', () => {
        sports.visit()
    })

    it('should contain relevant content header', () => {
        sports.openShowsCategory()
        general.getPrimaryHeader().should('contain.text', 'Shows')
    })

    it('should display relevant content rail', () => {
        sports.getRailHeader().should('have.text', 'Best of The DAZN Boxing Show')
    })
})
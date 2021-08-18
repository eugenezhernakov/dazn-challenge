import HomePage from '../support/page_objects/home.page'
import GeneralPage from '../support/page_objects/general.page'

describe('Home page', () => {
    const home = new HomePage()
    const general = new GeneralPage()

    it('should successfully open the homepage', () => {
        home.visit()
        home.getNavigationText().contains('HOME')
    })

    it('should scroll to the right on the first content rail', () => {
        home.clickPrevious().should('not.be.visible')
        home.clickNext()
    })

    it('should select fifth item in scrolled rail', () => {
        home.selectItem()
    })

    it('should verify marketing information', () => {
        general.getPrimaryHeader().should('contain.text', 'Watch it on DAZN')
        general.getSecondaryHeader().should('contain.text', 'Smith vs. Fowler Press Conference: The Battle of Liverpool Heats Up')
        general.getExpirationDate().should('contain.text', 'Available until Sat 11th Sept at 14:48')
    })

})
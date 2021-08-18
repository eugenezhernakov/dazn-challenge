import SchedulePage from '../support/page_objects/schedule.page'

describe('Schedule page', () => {
    const schedule = new SchedulePage()

    it('should open the schedule page', () => {
        const today = new Date()
        today.toISOString().substring(0, 10)
        schedule.visit()
        cy.url().should('include', '/schedule')
        
    })

    it('should verify existing content within specific date tile', () => {
        schedule.clickOnDate()
        schedule.getShowName().should('have.text', 'The DAZN Boxing Show | August 23')
    })

    it('should verify lack of content under a specific filter', () => {
        schedule.clickFilterSelection()
        schedule.clickDocsFilter()
        schedule.checkFilterCount().should('have.text', '1')
        schedule.checkGridMessage().should('have.text', 'There are currently no events in our schedule on this day.')
    })
})
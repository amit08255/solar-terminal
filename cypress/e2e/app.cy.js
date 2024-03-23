describe('Dashboard should load report correctly', () => {
    it('should navigate to the about page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/');
        cy.wait(5000);

        // The background image should exist
        cy.get('[data-testid=background-image]', { timeout: 10000 }).should('exist');

        // Solar Grid should have 30 cells
        cy.get('[data-testid=solar-grid-cell]').should('have.length', 30);

        // Solar Grid cells contain Voltage and Watts values
        cy.get('[data-testid=solar-grid-cell]').each((cell) => {
            cy.wrap(cell).contains(/\d+[.]?\d+\s+v/i);
            cy.wrap(cell).contains(/\d+[.]?\d+\s+w/i);
        });

        // Solar Grid cells with voltage less than 10 and watts less than 200
        // should have data-bgcolor="weak"
        cy.get('[data-testid=solar-grid-cell]').each((cell) => {
            const voltage = parseFloat(cell.text().match(/\d+[.]?\d+\s+v/i)[0].replace('v', ''));
            const watts = parseFloat(cell.text().match(/\d+[.]?\d+\s+w/i)[0].replace('w', ''));
            if (voltage < 10 && watts < 200) {
                cy.wrap(cell).should('have.attr', 'data-bgcolor', 'weak');
            } else {
                cy.wrap(cell).should('have.attr', 'data-bgcolor', 'healthy');
            }
        });

        // Monitoring grid should contain a title "Panel Monitoring Grid"
        cy.get('[data-testid=monitoring-grid] h4').contains(/panel monitoring grid/i);

        // There should be 3 overview indicator stats
        cy.get('[data-testid=overview-indicator-stats]').should('have.length', 3);

        // First overview indicator stats should contain Total Panels
        cy.get('[data-testid=overview-indicator-stats]').first().contains(/\d+ total panels/i);

        // Second overview indicator stats should contain Weak Panels
        cy.get('[data-testid=overview-indicator-stats]').eq(1).contains(/\d+ weak panels/i);

        // Third overview indicator stats should contain Healthy Panels
        cy.get('[data-testid=overview-indicator-stats]').eq(2).contains(/\d+ healthy panels/i);

        // All overview indicator stats should have an indicator
        cy.get('[data-testid=overview-indicator-stats]').find('[data-testid=indicator]').should('have.length', 3);

        // There should be 1 overview text stats
        cy.get('[data-testid=overview-text-stats]').should('have.length', 1);

        // First overview text stats should contain Total Yield
        cy.get('[data-testid=overview-text-stats]').first().contains(/total\s+yield\d+[.]?\d+kWh/i);
    })
});

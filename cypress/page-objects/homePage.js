class homePage {

	signinButton() {
		return cy.xpath("(//a[contains(.,'Sign in')])[1]");
	}
	searchtextInput() {
		return cy.xpath("//input[@placeholder='Search for anything']");
	}
	searchButton() {
		return cy.xpath("//input[@type='submit']");
	}
}
export default homePage;
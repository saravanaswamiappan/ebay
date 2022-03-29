class signinPage {

	emailtextInput() {
		return cy.xpath("//input[@id='userid']");
	}
	continueButton() {
		return cy.xpath("//button[@id='signin-continue-btn']");
	}
	passwordtextInput() {
		return cy.xpath("//input[@id='pass']");
	}
	submitButton() {
		return cy.xpath("//button[@id='sgnBt']");
	}
}
export default signinPage;

import homePage from "../page-objects/homePage";
import signinPage from "../page-objects/signinPage";

//const signinpage = new signinPage();


Cypress.Commands.add('multipartFormRequest', (method, url, formData, done) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        done(xhr);
    };
    xhr.onerror = function () {
        done(xhr);
    };
    xhr.send(formData);
});

Cypress.Commands.add('login', (username, password) => {


    const homepage = new homePage();
   
    cy.visit(Cypress.env('baseUrl'));

    homepage.signinButton().click();
    const signinpage = new signinPage();
    signinpage.emailtextInput().type(username);
    signinpage.continueButton().click();
    signinpage.passwordtextInput().type(password);
    signinpage.submitButton().click();
});


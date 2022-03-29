
//get user login test data
import { userlogin } from "../../fixtures/";
import homePage from "../../page-objects/homePage";

//get context for all the Tests

describe('Ebay Login', () =>
{
    let user;
   

    before(() => {

        if (Cypress.env('envname') == 'prod') {
            user = userlogin.user;
            Cypress.env('baseUrl', user.baseUrl)
        }        
    })


    //before each test, get login information and cy.intercept calls
    beforeEach(() => {
        cy.login(user.email, user.password);

    });
    
    it('Verfiy login and search button visible', () => {

        const homepage = new homePage();
        homepage.searchButton().should('be.visible');
    });
    
});


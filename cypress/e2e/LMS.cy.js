
/// <reference types="cypress" />
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

  describe("Testing of LMS", () => {
    it("Test number 1", () => {
      loginPage.navigate();
      loginPage.validateLoginOne();
      loginPage.validatePasswordOne();
      loginPage.validateButton();
      homePage.validateButtonMenu();
      homePage.validateLogOutOne();
       });
    

    it("Test number 2", () => {
      loginPage.navigate();
      loginPage.validateLoginTwo();
      loginPage.validatePasswordTwo();
      loginPage.validateButton();
      homePage.validateButtonMenu();
      homePage.validateLogOutTwo();
       });
    });
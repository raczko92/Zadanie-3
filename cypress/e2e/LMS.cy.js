
/// <reference types="cypress" />
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

  describe("Testing of LMS", () => {
    it("Test number 1", () => {
      loginPage.navigate();
      loginPage.insertFirstLogin();
      loginPage.insertFirstPassword();
      loginPage.clickLoginButton();
      homePage.clickButtonMenu();
      homePage.clickFirstLogOutButton();
       });
    

    it("Test number 2", () => {
      loginPage.navigate();
      loginPage.insertSecondLogin();
      loginPage.insertSecondPassword();
      loginPage.clickLoginButton();
      homePage.clickButtonMenu();
      homePage.clickSecondLogOutButton();
       });
    });
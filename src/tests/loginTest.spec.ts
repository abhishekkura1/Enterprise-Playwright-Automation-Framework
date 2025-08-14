import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test",async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("abhishek5225278@agentforce.com");
    await loginPage.fillPassword("test1234");
    const homePage=await loginPage.clickLoginButton();
    await homePage.expectSalesTitleToBeVisible();
});
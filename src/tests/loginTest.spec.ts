import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {decrypt,encrypt} from "../utils/CryptojsUtil";
import {encryptEnvFile,decryptEnvFile} from "../utils/EncryptEnvFile";

test("test",async({page})=> //test.skip("test",async({page})=>
{
    const loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();
    /*await loginPage.fillUsername("abhishek5225278@agentforce.com");
    await loginPage.fillPassword("test1234");*/
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);
    const homePage=await loginPage.clickLoginButton();
    await homePage.expectSalesTitleToBeVisible();
});

test("Sample env test",async({page})=>
{
    /*console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);*/
    /*const plaintext='Hello, Mars!';
    const encryptedText=encrypt(plaintext);
    console.log('SALT:',process.env.SALT);
    console.log('Encrypted:',encryptedText);
    const decryptedText=decrypt(encryptedText);
    console.log('Decrypted:',decryptedText);*/
    encryptEnvFile();
});
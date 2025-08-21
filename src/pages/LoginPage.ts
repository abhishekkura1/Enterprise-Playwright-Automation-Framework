import {Page} from "@playwright/test";
import HomePage from "./homePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage
{
    private readonly usernameInputSelector="#username";
    private readonly passwordInputSelector="#password8";
    private readonly loginButtonSelector="#Login";
    constructor(private page:Page)
    {
    }
    async navigateToLoginPage()
    {
        //await this.page.goto("/");
        await this.page.goto("https://login.salesforce.com");
        logger.info('Navigated to login.salesforce.com')
    }
    async fillUsername(username:string)
    {
        await this.page.locator(this.usernameInputSelector).fill(username);
        logger.info("Filled username");
    }
    async fillPassword(password:string)
    {
        await this.page.locator(this.passwordInputSelector).fill(password);
        logger.info("Filled password");
    }
    async clickLoginButton()
    {
        await this.page.locator(this.loginButtonSelector).click().catch((error)=>
            {
                console.error(`Error clicking login button:${error}`);
                logger.error(`Error clicking login button: ${error}`);
                throw error; //Rethrow the error if needed
            }
        ).then(()=>logger.info("Clicked login button"));
        const homePage=new HomePage(this.page);
        return homePage;
    }
}
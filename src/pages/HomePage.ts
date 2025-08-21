import {Page,expect} from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

export default class HomePage
{
    private readonly salesTitleLocator="Sales";
    private readonly contactsLinkLocator="Contacts";
    constructor(private page:Page)
    {
    }
    async expectSalesTitleToBeVisible()
    {
        //await expect(this.page.getByTitle(this.salesTitleLocator)).toBeVisible({timeout:15000});
        await expect(this.page.getByTitle(this.salesTitleLocator)).toBeVisible({timeout:15000}).catch((error)=>
        {
            logger.error(`Error clicking login button: ${error}`);
            throw error;
        }).then(()=>logger.info("Sales Title is visible"));
    }
    async navigateToContactTab()
    {
        await expect(this.page.getByRole('link',{name:this.contactsLinkLocator})).toBeVisible();
        logger.info("Contacts Tab is visible")
        await this.page.getByRole('link',{name:this.contactsLinkLocator}).click();
        logger.info("Contacts Tab is clicked")
        return new ContactPage(this.page);
    }
}
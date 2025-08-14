import {Page,expect} from "@playwright/test";

export default class HomePage
{
    private readonly salesTitleLocator="Sales";
    constructor(private page:Page)
    {
    }
    async expectSalesTitleToBeVisible()
    {
        await expect(this.page.getByTitle(this.salesTitleLocator)).toBeVisible({timeout:15000});
    }
}
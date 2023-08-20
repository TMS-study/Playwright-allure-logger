import { Locator, Page, test } from "@playwright/test";
import BasePage from "./base.page";
import { logger } from "../log.conf";
import { clickButtonLog } from "../log.conf";

export default class HomeSchool extends BasePage {
    readonly enrollSchool: Locator;
    readonly tryFree: Locator;
    readonly application: Locator;
    readonly buttonClass: Locator;
    readonly discountBlock: Locator;
    readonly startLearnInFormat: Locator;
    readonly detailStandart: Locator;
    readonly detailPremium: Locator;
    readonly detaimMiniClass: Locator;


    constructor(page: Page) {
        super(page);
        this.enrollSchool = page.locator('//button[contains(@class, "styled__Root-lnJslf")]//div[contains(@class, "cmCAGE") and text() = "Поступить в школу"]');
        this.tryFree = page.locator('//div[contains(@class, "styled__Actions-hNOqRH")]//div[contains(@class, "styled__Content-jZzzzQ") and text() = "Попробовать бесплатно"]');
        this.application = page.locator('//div[@name="request"]');
        this.buttonClass = page.locator('div.styled__TabsWrapper-faUaGh div.fox-ui__sc-ggtlgu-3');
        this.discountBlock = page.locator('fox-ui__sc-s2fogy-0 iwHwmg fox-Text styled__Discount-epYifQ gaTjhL');
        this.startLearnInFormat = page.locator('styled__Root-lnJslf ekSvQK styled__Action-kHJKHy fKPOzT');
        this.detailStandart = page.locator('//div[@order="2"]//a[@target="_blank"]');
        this.detailPremium = page.locator('//div[@order="1"]//a[@target="_blank"]');
        this.detaimMiniClass = page.locator('//div[@order="3"]//a[@target="_blank"]');
    }



   

    // async tryFreeClick() {
    //     await clickButtonLog(this.tryFree);
    //     await this.tryFree.scrollIntoViewIfNeeded();
    //     await this.tryFree.hover();
    //     await this.tryFree.click();
    // }
    public async tryFreeClick() {
        await test.step("I click  button tryFree", async () => {
            clickButtonLog(this.tryFree);
            await this.tryFree.click();
        })
    }
    public async enrollSchoolClick() {
        await test.step("I click  button enrollSchool", async () => {
            clickButtonLog(this.enrollSchool);
            await this.enrollSchool.click();
        })
    }

    // async tryFreeClick() {
    //     await clickButtonLog(this.tryFree);
        
    //     await this.page.evaluate(() => {
    //         if (this.tryFree) {
    //             this.tryFree.click();
    //         } else {
    //             console.error('Element not found');
    //         }
    //     });
    // }

    public async areButtonsClass() {
        //await this.openPage();
        const buttons = await this.buttonClass.all();
        return await Promise.all(buttons.map(async (button) => await button.isEnabled()));
    }

    public async discountInf() {
        //await this.openPage();
        return this.discountBlock;
    }

    public async areStartLearnInFormat() {
       // await this.openPage();
        const buttons = await this.startLearnInFormat.all();
        return await Promise.all(buttons.map(async (button) => await button.isEnabled()));
    }

    public async clickdetailStandart(){
        await clickButtonLog(this.detailStandart);
        await this.detailStandart.first().click()
    }
    public async clickdetailPremium(){
        await clickButtonLog(this.detailPremium);
        await this.detailPremium.first().click()
    }
    public async clickdetailMiniClass(){
        await clickButtonLog(this.detaimMiniClass);
        await this.detaimMiniClass.first().click()
    }

}
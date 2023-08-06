import { Locator, Page } from "@playwright/test";
import BasePage from "./base.page";

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
        this.enrollSchool = page.locator('//button[@class="styled__Root-lnJslf ejklua styled__Action-knGcCz gzQlLk"]');
        this.tryFree = page.locator('//a[@class="styled__RootA-isrlLJ cBEMFF styled__Action-knGcCz gzQlLk"]');
        this.application = page.locator('//div[@class="styled__Root-eQsOOc iDoCRA styled__Root-gRcBpl beaipw"]');
        this.buttonClass = page.locator('div.styled__TabsWrapper-faUaGh div.fox-ui__sc-ggtlgu-3');
        this.discountBlock = page.locator('fox-ui__sc-s2fogy-0 iwHwmg fox-Text styled__Discount-epYifQ gaTjhL');
        this.startLearnInFormat = page.locator('styled__Root-lnJslf ekSvQK styled__Action-kHJKHy fKPOzT');
        this.detailStandart = page.locator('//div[@order="2"]//a[@target="_blank"]');
        this.detailPremium = page.locator('//div[@order="1"]//a[@target="_blank"]');
        this.detaimMiniClass = page.locator('//div[@order="3"]//a[@target="_blank"]');
    }


    async enrollSchoolClick() {
        await this.openPage();
        await this.enrollSchool.click();
    }

    async tryFreeClick() {
        await this.openPage();
        await this.tryFree.click();
    }

    async areButtonsClass() {
        await this.openPage();
        const buttons = await this.buttonClass.all();
        return await Promise.all(buttons.map(async (button) => await button.isEnabled()));
    }

    async discountInf() {
        await this.openPage();
        return this.discountBlock;
    }

    async areStartLearnInFormat() {
        await this.openPage();
        const buttons = await this.startLearnInFormat.all();
        return await Promise.all(buttons.map(async (button) => await button.isEnabled()));
    }

    async clickdetailStandart(){
        await this.openPage();
        await this.detailStandart.first().click()
    }
    async clickdetailPremium(){
        await this.openPage();
        await this.detailPremium.first().click()
    }
    async clickdetailMiniClass(){
        await this.openPage();
        await this.detaimMiniClass.first().click()
    }

}
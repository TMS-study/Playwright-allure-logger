import { test, expect } from "@playwright/test";
import HomeSchool from "../page/home_school.page";

test.describe('Check block one "externat school Foxford"', async () => {

    let externatSchool: HomeSchool;
    test.beforeEach(async ({ page }) => {
        externatSchool = new HomeSchool(page);
    });

    test('Check button enrollSchool', async () => {
        await externatSchool.enrollSchoolClick();
        await externatSchool.application.scrollIntoViewIfNeeded();
        await expect(externatSchool.application).toBeVisible();
    });

    test('Check button tryFree', async ({ page }) => {
        await externatSchool.tryFreeClick();
        await expect(page.url()).toContain('https://externat.foxford.ru/demo');
    })


    test.describe('Check block learn in a convenient format', async () => {

        let externatSchool: HomeSchool;
        test.beforeEach(async ({ page }) => {
            externatSchool = new HomeSchool(page);
        });

        test('Check buttons 1-11 class are clickable', async () => {

            const buttonsAreClickable = await externatSchool.areButtonsClass();
            for (const isEnabled of buttonsAreClickable) {
                await expect(isEnabled).toBeTruthy();
            }
        });

        test('Check buttons class active', async () => {
            const isActive = 'EQOIk';
            const buttonsAreClickable = await externatSchool.areButtonsClass();

            for (let i = 0; i < buttonsAreClickable.length; i++) {
                const isEnabled = buttonsAreClickable[i];
                await expect(isEnabled).toBeTruthy();
                const button = externatSchool.buttonClass.nth(i);
                await button.click();
                await expect(await button.getAttribute('class')).toContain(isActive);
            }

        });

        test('Check click buttons startLearn in Format ', async ({ page }) => {
            const buttonStandart: any = await externatSchool.clickdetailPremium();
            const buttonPremium: any = await externatSchool.clickdetailPremium();
            const buttonMiniClass: any = await externatSchool.clickdetailMiniClass();
            if (buttonStandart || buttonPremium) {
                await expect(page.url()).toContain('https://externat.foxford.ru/standard-premium')
            }
            if (buttonMiniClass) {
                await expect(page.url()).toContain('https://externat.foxford.ru/mini-klassy')
            }



        });

        test('Check redirect buttons detail in Format ', async () => {

            const buttonsAre = await externatSchool.areStartLearnInFormat();

            for (let i = 0; i < buttonsAre.length; i++) {
                const isEnabled = buttonsAre[i];
                await expect(isEnabled).toBeTruthy();
                const button = externatSchool.startLearnInFormat.nth(i);
                await button.click();
                await externatSchool.application.scrollIntoViewIfNeeded();
                await expect(externatSchool.application).toBeVisible();
            }

        });



        test("Check discount value from API equal to  discount in webelement", async () => {

            const response = await fetch("https://foxford.ru/api/externship/products/prices?year=2023");
            const data = await response.json();

            if (data.full_payment && data.full_payment.discount) {  //  Проверить что эти свойства есть в апишке
                const expectedDiscount = data.full_payment.discount;
                const element = await externatSchool.discountInf();
                if (expectedDiscount === 0) { // Если скидка ноль, то элемент не должны выводить
                    expect(element).toBeNull();
                }
                else { // если не ноль, то выводим элемент
                    expect(element).toBeVisible()// проверить, что эелемент есть
                    const actualDiscountString = await element.textContent();  // здесь смотрим, что внутри тега
                    await expect(actualDiscountString).toBe(expectedDiscount);  // сравнимаем значение из API с значением на странице

                }
            }
        });
    });
});



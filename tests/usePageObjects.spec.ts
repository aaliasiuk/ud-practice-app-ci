import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('navigate to form page @smoke', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})

test('parametrized methods @smoke', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`


    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormatWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
    // await page.screenshot({ path: 'screenshots/formsLayoutsPage.png' })
    // const buffer = await page.screenshot()
    //to print screenshot
    //console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithEmailAndCheckbox(randomFullName, randomEmail, true)
    // await page.locator('nb-card', { hasText: "Inline form" }).screenshot({ path: 'screenshots/inlineForm.png' })
    // await pm.navigateTo().datePickerPage()
    // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5)
    // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(5, 10)

})


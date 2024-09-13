import { test } from '../test-options'
import { faker } from '@faker-js/faker'


test('parametrized methods @regression', async({pageManager})=>{
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormatWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'option 1')
    await pageManager.onFormLayoutsPage().submitInlineFormWithEmailAndCheckbox(randomFullName, randomEmail, true)


})
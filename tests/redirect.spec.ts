import { test, expect } from '@playwright/test'

test.skip('Verify redirect functionality', async ({ page }) => {
    const urls = [
        'https://gazellestaging.com/',
        'https://www.gazellestaging.com/',
        'https://www.gazellestaging.com/trade-in',
        'https://www.gazellestaging.com/iphone',
        'https://www.gazellestaging.com/iphone/iphone-14',
        'https://www.gazellestaging.com/help/contact_us',
        'https://www.gazellestaging.com/ipad/ipad-air/5th-gen/unlocked'
    ]

    const expectedRedirects = {
        'https://www.gazellestaging.com/': 'https://buy.gazellestaging.com/',
        'https://gazellestaging.com/': 'https://buy.gazellestaging.com/'

    }
    for (const url of urls) {
        await page.goto(url)
        const currentUrl = page.url()
        if (expectedRedirects[url]) {
            expect(currentUrl).toBe(expectedRedirects[url])
        }else{
            expect(currentUrl).toBe(url)
        }
    }
})
import { Page, Locator } from '@playwright/test'
import { HelperBase } from './helperBase'

export class NavigationPage extends HelperBase {
    readonly formLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smarttableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) {
        super(page)
        this.formLayoutsMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smarttableMenuItem = page.getByText('Smart Table')
        this.toastrMenuItem = page.getByText('Toastr')
        this.tooltipMenuItem = page.getByText('Tooltip')
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms')
        //await this.page.waitForTimeout(1000)
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smarttableMenuItem.click()
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlay')
        await this.tooltipMenuItem.click()

    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()
    }
}
import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';


require('dotenv').config()


export default defineConfig<TestOptions>({
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://localhost:4200/',
        globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    },

    projects: [
        {
            name: 'chromium',
        },
    ],
});

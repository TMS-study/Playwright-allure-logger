import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30 * 1000,
    expect: { timeout: 20000 },
    
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        viewport: {width:1800, height: 1024},
        actionTimeout: 20*1000,
        navigationTimeout: 15*1000
    },

    projects: [
        {
            name: 'chrome',
            use: {
                ...devices['Desktop Chrome'],
                browserName: 'chromium',
            },
        },
        // Остальные проекты...
    ],

    workers: 3,
    fullyParallel: true,
    reporter: [
        ['html'],
        [
            "allure-playwright",
            {
              detail: true,
              outputFolder: "allure-report",
              suiteTitle: true,
            }
        ],
    ],
};

export default config;
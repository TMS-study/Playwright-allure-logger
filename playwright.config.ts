import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30 * 1000,
    expect: { timeout: 20000 },

    use: {
        viewport: {width:1200, height: 1024},
        actionTimeout: 10*1000,
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
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                browserName: 'firefox', // Используем Firefox
            }
        },

        {
            name: 'mobile',
            use:{ ...devices['Galaxy S8']}
        },
    ],

    workers: 3,
    fullyParallel: true,
    reporter: 'html'
};

export default config;
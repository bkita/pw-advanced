import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const LOGIN_SESSION = path.join(__dirname, 'tmp/login.json');

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://app.todoist.com',
    trace: 'on',
    contextOptions: {
      permissions: ['microphone'],
    },
    launchOptions: {
      args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--enable-media-stream',
        '--allow-insecure-localhost',
      ],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], locale: 'pl-PL', storageState: LOGIN_SESSION },
      dependencies: ['login session setup'],
    },
    {
      name: 'login session setup',
      use: { ...devices['Desktop Chrome'], locale: 'pl-PL' },
      testMatch: '**/login-session.setup.ts',
      teardown: 'login session teardown',
    },
    {
      name: 'login session teardown',
      testMatch: '**/login-session.teardown.ts',
    },
  ],
});

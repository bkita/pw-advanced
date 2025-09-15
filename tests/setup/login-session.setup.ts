/* eslint-disable playwright/no-standalone-expect */
import { expect, test as setup } from '@playwright/test';
import { Logger } from 'tslog';

setup('login with valid credentials', async ({ page }) => {
  const log = new Logger();
  log.info('🚀 SETUP FUNCTION');

  // Arrange
  const loginPageUrl = '/auth/login';
  const emailPlaceholder = 'Wpisz swój e-mail...';
  const passwordPlaceholder = 'wpisz hasło...';
  const loginButtonName = 'Logowanie';
  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  if (!email || !password) {
    throw new Error('Email or password environment variables are not defined');
  }

  // Act
  await page.goto(loginPageUrl);
  await page.getByPlaceholder(emailPlaceholder).fill(email);
  await page.getByPlaceholder(passwordPlaceholder).fill(password);
  await page.getByRole('button', { name: loginButtonName }).click();

  // Assert
  await expect(page).toHaveURL('https://app.todoist.com/app/today', { timeout: 10_000 });
  await expect(page).toHaveTitle(/Dziś/);

  await page.context().storageState({ path: 'tmp/login.json' });
  log.info('👍 SETUP FUNCTION - CREATED LOGIN_SESSION');
});

import { test as base } from '@playwright/test';
import { ILogObj, Logger } from 'tslog';
import { HomePage } from '../pages/HomePage';

interface Pages {
  homePage: HomePage;
}
interface Log {
  log: Logger<ILogObj>;
}

// PAGE OBJECTS PLUS LOGGER
const pages = base.extend<Pages & Log>({
  // eslint-disable-next-line no-empty-pattern
  log: async ({}, use) => {
    await use(new Logger<ILogObj>());
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

// GLOBAL BEFORE EACH AND AFTER EACH HOOKS
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const test = pages.extend<{ forEachTest: void }>({
  forEachTest: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async ({ page }, use) => {
      // This code runs before every test.
      const log = new Logger<ILogObj>();
      log.info('🧹 Global hook: beforeEach');
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.leftPanel.deleteAllProjects();

      await use();

      // This code runs after every test.
      log.info('🧹 Global hook: afterEach');
      await homePage.leftPanel.deleteAllProjects();
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';

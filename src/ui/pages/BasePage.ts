import { expect, Page } from '@playwright/test';
import { Logger } from 'tslog';

export abstract class BasePage {
  protected log = new Logger();
  protected url = '/app/today';

  constructor(protected page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await expect(this.page.getByTestId('app-sidebar-container')).toBeVisible();
    await expect(this.page.getByTestId('task-selection-list-container')).toBeVisible();
    await this.closeNotificationPopup();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  protected async closeNotificationPopup(): Promise<void> {
    const notificationPopup = this.page.getByTestId('toasts-container').locator('div[role="alert"]');
    await this.page.addLocatorHandler(notificationPopup, async () => {
      const popupTitle = await notificationPopup.locator('div div').innerText();
      this.log.info(`🚧 A notification popup has appeared: "${popupTitle}"`);
      this.log.info('🚫 Closing notification popup!');
      await notificationPopup.getByLabel('Zamknij').click();
      await expect(notificationPopup).toBeHidden();
    });
  }
}

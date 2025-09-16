import { expect, Locator } from '@playwright/test';
import { BaseModal } from './BaseModal';

export class SearchProjectModal extends BaseModal {
  // Locators
  private readonly searchModal = (): Locator => this.page.getByTestId('modal-overlay').locator('div[role="dialog"]');

  // Actions
  async searchForAProject(projectName: string): Promise<void> {
    await expect(this.searchModal()).toBeVisible();

    await this.searchModal().getByPlaceholder('Wyszukaj lub wpisz polecenie...').fill(projectName);

    const searchResults = this.searchModal().locator('div[class="quick_find__search_result"]');
    await expect(searchResults).toBeVisible();

    expect(await searchResults.innerText()).toContain(projectName);
    await searchResults.click();
  }
}

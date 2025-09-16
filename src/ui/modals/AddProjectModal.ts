import { expect, Locator } from '@playwright/test';
import { BaseModal } from './BaseModal';

export class AddProjectModal extends BaseModal {
  // Locators
  readonly addProjectForm = (): Locator => this.page.getByTestId('modal-overlay').locator('form');

  // Actions
  async addNewProject(name: string, color: string): Promise<void> {
    await this.addProjectForm().locator('input[name="name"]').fill(name);
    await this.addProjectForm().getByRole('combobox', { name: 'Kolor' }).click();
    const projectColorSelector = this.page.getByRole('listbox', { name: 'Kolor' });
    await expect(projectColorSelector).toBeVisible();
    await projectColorSelector.getByText(color).click();
    await this.addProjectForm().getByRole('button', { name: 'Dodaj' }).click();
  }
}

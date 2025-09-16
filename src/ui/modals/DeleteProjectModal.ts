import { Locator } from '@playwright/test';
import { BaseModal } from './BaseModal';

export class DeleteProjectModal extends BaseModal {
  readonly deletePRojectModal = (): Locator => this.page.getByTestId('modal-overlay').locator('div[role="dialog"]');

  // Actions
  async delete(): Promise<void> {
    await this.deletePRojectModal().getByRole('button', { name: 'Usuń' }).click();
  }
}

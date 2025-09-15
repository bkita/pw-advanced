import { expect, Locator } from '@playwright/test';
import { BaseModal } from './BaseModal';

export class TaskModal extends BaseModal {
  // Locators
  readonly taskModal = (): Locator => this.page.getByTestId('task-details-modal');
  readonly addCommentButton = (): Locator => this.taskModal().getByRole('button', { name: 'Skomentuj' });
  readonly addFileButton = (): Locator => this.taskModal().getByRole('button', { name: 'Dodaj plik' });
  readonly addAudioButton = (): Locator => this.taskModal().getByRole('button', { name: 'Nagraj dźwięk' });
  readonly uploadSpinner = (): Locator => this.taskModal().locator('svg[class="ring_spinner"]');

  // Actions
  async addCommentWithAttachments(comment: string): Promise<void> {
    await this.taskModal().getByTestId('open-comment-editor-button').click();
    await expect(this.addCommentButton()).toBeVisible();

    await this.taskModal().getByLabel('Skomentuj').fill(comment);

    // UPLOAD FILE
    const uploadPromise = this.page.waitForEvent('filechooser');
    await this.addFileButton().click();
    const upload = await uploadPromise;
    await upload.setFiles('uploads/kod.png');
    await expect(this.uploadSpinner()).toBeHidden();
    await expect(this.taskModal().getByText(/kod.png/)).toBeVisible();

    // UPLOAD AUDIO
    await this.addAudioButton().click();
    await this.taskModal().getByRole('button', { name: 'Nagraj', exact: true }).click();
    await expect(this.page.getByText('00:03')).toBeVisible();
    await this.taskModal().getByRole('button', { name: 'Zatrzymaj' }).click();
    await this.taskModal().getByRole('button', { name: 'Załącz', exact: true }).click();
    await expect(this.uploadSpinner()).toBeHidden();
    await expect(this.taskModal().getByText(/voice/)).toBeVisible();

    await this.addCommentButton().click();

    const commentLocator = this.taskModal().locator(`div[class="note_content"]:has-text("${comment}")`).first();
    await expect(commentLocator).toBeVisible();

    await this.taskModal().getByLabel('Zamknij zadanie').click();
  }
}

import { expect, Locator, Page } from '@playwright/test';
import { TaskModal } from '../modals/TaskModal';
import { BaseComponent } from './BaseComponent';

export class ProjectComponent extends BaseComponent {
  // Modals
  readonly taskModal: TaskModal;

  constructor(protected page: Page) {
    super(page);
    this.taskModal = new TaskModal(page);
  }

  // Locators
  readonly projectDetails = (): Locator => this.page.locator('#content');
  readonly projectHeader = (): Locator => this.page.getByTestId('large-header');
  readonly addTaskButton = (): Locator => this.projectDetails().getByRole('button', { name: 'Dodaj zadanie' });

  // Actions
  async addTask(name: string, description: string): Promise<void> {
    await this.addTaskButton().click();
    await this.projectDetails().locator('form').getByLabel('Nazwa zadania').fill(name);
    await this.projectDetails().locator('form').getByLabel('Opis').fill(description);
    await this.projectDetails().getByTestId('task-editor-submit-button').click();
  }

  getTaskByName(name: string): Locator {
    return this.projectDetails().locator(`div[class="task_content"]:has-text("${name}")`).first();
  }

  async openTask(name: string): Promise<void> {
    await this.getTaskByName(name).click();
    await expect(this.taskModal.taskModal()).toBeVisible();
  }

  async addCommentWithAttachments(comment: string): Promise<void> {
    await this.taskModal.addCommentWithAttachments(comment);
  }

  async getNumberOfComments(): Promise<string> {
    return this.projectDetails().locator('div[class="task_list_item__content"] div a span').innerText();
  }
}

import { expect, Locator, Page } from '@playwright/test';
import { AddProjectModal } from '../modals/AddProjectModal';
import { BuyPremiumModal } from '../modals/BuyPremiumModal';
import { DeleteProjectModal } from '../modals/DeleteProjectModal';
import { SearchProjectModal } from '../modals/SearchProjectModal';
import { CreateProjectModel } from '../models/create-project.model';
import { BaseComponent } from './BaseComponent';

export class LeftMenuComponent extends BaseComponent {
  // Components
  private readonly addProjectModal: AddProjectModal;
  private readonly deletePRojectModal: DeleteProjectModal;
  private readonly searchProjectModal: SearchProjectModal;

  readonly buyPremiumModal: BuyPremiumModal;

  constructor(protected page: Page) {
    super(page);
    this.addProjectModal = new AddProjectModal(page);
    this.buyPremiumModal = new BuyPremiumModal(page);
    this.deletePRojectModal = new DeleteProjectModal(page);
    this.searchProjectModal = new SearchProjectModal(page);
  }

  // Locators
  private readonly leftMenuLocator = (): Locator => this.page.getByTestId('app-sidebar-container');
  private readonly allProjects = (): Locator => this.page.locator('#projects_list li');
  private readonly navigationMenu = (): Locator => this.page.getByTestId('top-sidebar-nav-items');
  private readonly searchLink = (): Locator => this.navigationMenu().getByText('Szukaj');

  // Actions

  async openProjectsMenu(): Promise<void> {
    await this.leftMenuLocator().getByRole('button', { name: 'Menu Moje projekty ' }).click();
    await this.page.getByLabel('Dodaj projekt').click();
  }

  async addNewProject(project: CreateProjectModel): Promise<void> {
    await this.openProjectsMenu();
    await expect(this.addProjectModal.addProjectForm()).toBeVisible();
    this.log.info(`✅ Creating new project: ${project.name} - ${project.color}`);
    await this.addProjectModal.addNewProject(project.name, project.color);
  }

  async getAllProjectNames(): Promise<string[]> {
    return await this.allProjects().locator('a div span').allInnerTexts();
  }

  getProjectByName(name: string): Locator {
    return this.allProjects().locator(`a div span:has-text("${name}")`).first();
  }

  // Delete project
  async deleteProject(name: string): Promise<void> {
    await this.getProjectByName(name).click({ button: 'right' });
    await this.page.locator('div[role="menuitem"]', { hasText: 'Usuń' }).click();
    await this.deletePRojectModal.delete();

    await expect(this.getProjectByName(name)).toBeHidden();
  }

  async deleteAllProjects(): Promise<void> {
    if (await this.page.getByTestId('modal-overlay').isVisible()) {
      await this.page.keyboard.press('Escape');
    }

    const projects = await this.getAllProjectNames();
    this.log.info(`🗑️  Number of project(s) to delete: ${projects.length.toString()}`);

    if (projects.length > 0) {
      for (const project of projects) {
        this.log.info(`🗑️  Deleting project: ${project}`);
        await this.deleteProject(project);
      }
    }

    expect(await this.getAllProjectNames()).toHaveLength(0);
  }

  // Search for a project
  async searchForAProject(name: string): Promise<void> {
    await this.searchLink().click();
    await this.searchProjectModal.searchForAProject(name);
  }

  // OPEN PROJECT
  async openProject(name: string): Promise<void> {
    await this.getProjectByName(name).first().click();
  }
}

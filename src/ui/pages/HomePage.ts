import { Page } from '@playwright/test';
import { LeftMenuComponent } from '../components/LeftMenuComponent';
import { ProjectComponent } from '../components/ProjectComponent';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly leftPanel: LeftMenuComponent;
  readonly projectPanel: ProjectComponent;

  constructor(protected page: Page) {
    super(page);
    this.leftPanel = new LeftMenuComponent(page);
    this.projectPanel = new ProjectComponent(page);
  }
}

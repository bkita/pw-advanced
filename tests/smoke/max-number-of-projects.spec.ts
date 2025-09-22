import { ProjectColor } from '../../src/api/models/project.color.enum';
import { ProjectPayload } from '../../src/api/models/project.model';
import { createProjectAPIStep } from '../../src/api/steps/projects/create.project.api.step';
import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/ui/models/create-project.model';

test.describe('Max number of projects on free plan', () => {
  test('create project over limit', { tag: ['@smoke', '@smoke002'] }, async ({ homePage }) => {
    // Arrange
    const PROJECT_COLOR = 'Łosoś';
    const projects: CreateProjectModel[] = [
      { name: 'Project One', color: PROJECT_COLOR },
      { name: 'Project Two', color: PROJECT_COLOR },
      { name: 'Project Three', color: PROJECT_COLOR },
      { name: 'Project Four', color: PROJECT_COLOR },
      { name: 'Project Five', color: PROJECT_COLOR },
    ];

    // Act
    await homePage.open();
    for (const project of projects) {
      await homePage.leftPanel.addNewProject(project);
      await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
    }

    // Arrange
    const projectPayloadData: ProjectPayload[] = [
      { name: 'Project One', color: ProjectColor.OLIVE_GREEN },
      { name: 'Project Two', color: ProjectColor.LIME_GREEN },
      { name: 'Project Three', color: ProjectColor.TAUPE },
      { name: 'Project Four', color: ProjectColor.YELLOW },
      { name: 'Project Five', color: ProjectColor.SALMON },
    ];

    const expectedHeader = 'Chcesz mieć do dyspozycji więcej projektów?';

    // ACT
    await homePage.open();
    for (const projectPayload of projectPayloadData) {
      await createProjectAPIStep(projectPayload);
      await expect(homePage.leftPanel.getProjectByName(projectPayload.name)).toBeVisible();
    }

    await homePage.leftPanel.openProjectsMenu();

    // Assert
    const premiumModal = homePage.leftPanel.buyPremiumModal;
    await expect(premiumModal.modal()).toBeVisible();
    await expect(premiumModal.header()).toHaveText(expectedHeader);
  });
});

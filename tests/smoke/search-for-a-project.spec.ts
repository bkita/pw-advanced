import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/models/create-project.model';

test.describe('Search', () => {
  test('find and existing project', { tag: ['@smoke', '@smoke003'] }, async ({ homePage }) => {
    // Arrange
    const projects: CreateProjectModel[] = [
      { name: 'WORK', color: 'Łosoś' },
      { name: 'BILLS', color: 'Łosoś' },
      { name: 'HOLIDAYS', color: 'Łosoś' },
    ];

    const searchProject = 'WORK';

    // Act
    await test.step('create new project', async () => {
      await homePage.open();
      for (const project of projects) {
        await homePage.leftPanel.addNewProject(project);
        await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
      }
    });

    await test.step('find and existing project', async () => {
      await homePage.leftPanel.searchForAProject(searchProject);
    });

    // Assert
    await test.step('verify project header', async () => {
      await expect(homePage.projectPanel.projectHeader()).toBeVisible();
      await expect(homePage.projectPanel.projectHeader()).toHaveText(searchProject);
    });
  });
});

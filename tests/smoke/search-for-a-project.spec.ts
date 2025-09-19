import { ProjectColor } from '../../src/api/models/project.color.enum';
import { ProjectPayload } from '../../src/api/models/project.model';
import { createProjectAPIStep } from '../../src/api/steps/projects/create.project.api.step';
import { expect, test } from '../../src/fixtures/po.fixture';

test.describe('Search', () => {
  test('find and existing project', { tag: ['@smoke', '@smoke003'] }, async ({ homePage }) => {
    // Arrange
    // const projects: CreateProjectModel[] = [
    //   { name: 'WORK', color: 'Łosoś' },
    //   { name: 'BILLS', color: 'Łosoś' },
    //   { name: 'HOLIDAYS', color: 'Łosoś' },
    // ];

    // const searchProject = 'WORK';

    // Arrange
    const projectPayloadData: ProjectPayload[] = [
      { name: 'WORK', color: ProjectColor.OLIVE_GREEN },
      { name: 'BILLS', color: ProjectColor.LIME_GREEN },
      { name: 'HOLIDAYS', color: ProjectColor.TAUPE },
    ];

    const searchProject = 'WORK';

    // ACT
    await test.step('create new project', async () => {
      await homePage.open();
      for (const projectPayload of projectPayloadData) {
        await createProjectAPIStep(projectPayload);
        await expect(homePage.leftPanel.getProjectByName(projectPayload.name)).toBeVisible();
      }
    });

    // Act
    // await test.step('create new project', async () => {
    //   await homePage.open();
    //   for (const project of projects) {
    //     await homePage.leftPanel.addNewProject(project);
    //     await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
    //   }
    // });

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

import { faker } from '@faker-js/faker';
import { expect, test } from '../../src/fixtures/po.fixture';

import { CreateProjectModel } from '../../src/ui/models/create-project.model';

test.describe('Create Project', () => {
  // let projectId: string | null = null;

  // afterEach(async () => {
  //   if (projectId) {
  //     const deleteResponse = await deleteRequest(`${API_BASE_URL}/${PROJECTS}/${projectId}`);
  //     expect(deleteResponse.status()).toBe(200);

  //     const getResponse = await getRequest(`${API_BASE_URL}/${PROJECTS}/${projectId}`);
  //     expect(getResponse.status()).toBe(404);
  //   }
  // });

  test('should create a new project', { tag: ['@smoke', '@smoke001'] }, async ({ homePage }) => {
    // Arrange
    const project: CreateProjectModel = {
      name: faker.lorem.words(2),
      color: 'Intensywny czerwony',
    };

    // Act
    await homePage.open();
    await homePage.leftPanel.addNewProject(project);

    // // API - pobranie ID projektu po nazwie
    // projectId = await getProjectIdByNameAPI(project.name);
    // console.log(`Utworzono projekt o ID: ${String(projectId)}`);

    // let projectId: string | null = null;
    // await expect
    //   .poll(
    //     async () => {
    //       projectId = await getProjectIdByName(project.name);
    //       return projectId;
    //     },
    //     {
    //       timeout: 5000,
    //       message: 'Project ID did not appear in time',
    //     },
    //   )
    //   .not.toBeNull();
    // console.log(`Utworzono projekt o ID: ${String(projectId)}`);

    // Assert
    await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
  });
});

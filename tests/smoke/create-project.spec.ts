import { faker } from '@faker-js/faker';
import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/models/create-project.model';

test('should create a new project', { tag: ['@smoke', '@smoke001'] }, async ({ homePage }) => {
  // Arrange
  const project: CreateProjectModel = {
    name: faker.lorem.words(2),
    color: 'Intensywny czerwony',
  };

  // Act
  await homePage.open();
  await homePage.leftPanel.addNewProject(project);

  // Assert
  await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
});

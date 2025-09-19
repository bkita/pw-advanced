// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable playwright/no-conditional-in-test */
// /* eslint-disable @typescript-eslint/naming-convention */
// import { expect, test } from '@playwright/test';
// import { getRequest } from '../../src/api/requests/get.request';

// test('GET /projects returns 200', async () => {
//   const headers = {
//     Authorization: `Bearer ${process.env.API_KEY ?? ''}`,
//   };

//   const response = await getRequest('https://api.todoist.com/rest/v2/projects', headers);
//   expect(response.status()).toBe(200);

//   const projects = await response.json();

//   // Wyciągnięcie id projektu po nazwie
//   const projectName = 'demo projekt';
//   const projectId = getProjectIdByName(projects, projectName);
//   console.log(`ID projektu o nazwie "${projectName}":`, projectId);
// });

// function getProjectIdByName(projects: { id: string; name: string }[], projectName: string): string | undefined {
//   const project = projects.find((p) => p.name === projectName);
//   return project?.id;
// }

import { expect } from 'playwright/test';
import { parseResponse } from '../../../helpers/api/parse.response.helper';
import { API_BASE_URL, PROJECTS_ENDPOINT } from '../../config/api.config';
import { ProjectResponse } from '../../models/project.model';
import { getRequest } from '../../requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../requests/todoist.auth.headers';

// export const getProjectIdByName = async (projectName: string): Promise<string | null> => {
//   const headers = {
//     Authorization: `Bearer ${process.env.API_KEY ?? ''}`,
//   };

//   const response = await getRequest('https://api.todoist.com/rest/v2/projects', headers);
//   if (response.ok()) {
//     const projects = await parseResponse<ProjectResponse[]>(response);
//     const project = projects.find((p) => p.name === projectName);
//     return project ? project.id : null;
//   }

//   return null;
// };

// export const getProjectIdByName = async (projectName: string): Promise<string | null> => {
//   const timeout = 5_000;
//   const interval = 1_000;
//   const start = Date.now();
//   let projectId: string | null = null;

//   const headers = {
//     Authorization: `Bearer ${process.env.API_KEY ?? ''}`,
//   };

//   while (Date.now() - start < timeout) {
//     console.log(`Checking for project "${projectName}"...`);
//     const response = await getRequest('https://api.todoist.com/rest/v2/projects', headers);
//     if (response.ok()) {
//       const projects = await parseResponse<ProjectResponse[]>(response);
//       const project = projects.find((p) => p.name === projectName);
//       if (project) {
//         projectId = project.id;
//         break;
//       }
//     }
//     await new Promise((res) => setTimeout(res, interval));
//   }
//   return projectId;
// };

export const getProjectIdByNameAPIStep = async (projectName: string): Promise<string | null> => {
  let projectId: string | null = null;

  await expect
    .poll(
      async () => {
        const response = await getRequest(`${API_BASE_URL}/${PROJECTS_ENDPOINT}`, TODOIST_AUTH_HEADERS);
        if (response.ok()) {
          const projects = await parseResponse<ProjectResponse[]>(response);
          const project = projects.find((p) => p.name === projectName);
          projectId = project ? project.id : null;
        }
        return projectId;
      },
      { timeout: 5000, message: 'Project ID did not appear in given time' },
    )
    .not.toBeNull();

  return projectId;
};

export const getAllProjectIdsAPIStep = async (): Promise<string[]> => {
  const INBOX_PROJECT_NAME = 'Inbox';

  const response = await getRequest(`${API_BASE_URL}/${PROJECTS_ENDPOINT}`, TODOIST_AUTH_HEADERS);
  if (response.ok()) {
    const projects = await parseResponse<ProjectResponse[]>(response);
    return projects.filter((p) => p.name !== INBOX_PROJECT_NAME).map((p) => p.id);
  }
  return [];
};

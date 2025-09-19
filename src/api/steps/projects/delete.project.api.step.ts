import { expect } from 'playwright/test';
import { Logger } from 'tslog';
import { API_BASE_URL, PROJECTS_ENDPOINT } from '../../config/api.config';
import { deleteRequest } from '../../requests/delete.request';
import { getRequest } from '../../requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../requests/todoist.auth.headers';
import { getAllProjectIdsAPIStep } from './read.project.api.step';

export const deleteAllProjectsAPIStep = async (): Promise<void> => {
  const log = new Logger();

  const allProjectIds = await getAllProjectIdsAPIStep();
  log.info(`🗑️  [API] GET /projects - number of projects to delete: ${String(allProjectIds.length)}`);

  for (const id of allProjectIds) {
    log.info(`🗑️  [API] DELETE /projects/:id - deleting project with id: ${id}`);
    const response = await deleteRequest(`${API_BASE_URL}/${PROJECTS_ENDPOINT}/${id}`, TODOIST_AUTH_HEADERS);
    expect(response.status()).toBe(204);

    log.info(`🗑️  [API] GET /projects/:id - reading deleted project with id: ${id}`);
    const getResponse = await getRequest(`${API_BASE_URL}/${PROJECTS_ENDPOINT}/${id}`, TODOIST_AUTH_HEADERS);
    expect(getResponse.status()).toBe(404);
  }
};

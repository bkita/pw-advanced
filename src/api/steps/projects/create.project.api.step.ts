import { expect } from 'playwright/test';
import { Logger } from 'tslog';
import { parseResponse } from '../../../helpers/api/parse.response.helper';
import { API_BASE_URL, PROJECTS_ENDPOINT } from '../../config/api.config';
import { ProjectPayload, ProjectResponse } from '../../models/project.model';
import { postRequest } from '../../requests/post.request';
import { TODOIST_AUTH_HEADERS } from '../../requests/todoist.auth.headers';

export const createProjectAPIStep = async (projectPayload: ProjectPayload): Promise<ProjectResponse> => {
  const log = new Logger();
  log.info(`➕ [API] POST /projects - creating new project with name: ${projectPayload.name}`);

  const response = await postRequest(`${API_BASE_URL}/${PROJECTS_ENDPOINT}`, projectPayload, TODOIST_AUTH_HEADERS);
  expect(response.status()).toBe(200);

  const responseBody = await parseResponse<ProjectResponse>(response);
  expect(responseBody).toMatchObject(projectPayload);

  return responseBody;
};

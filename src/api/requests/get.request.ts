import { APIResponse, request } from '@playwright/test';
import { requestLogger, responseLogger } from '../../helpers/api/logger.helper';

export const getRequest = async (endpoint: string, headers: Record<string, string> = {}): Promise<APIResponse> => {
  const api = await request.newContext();
  requestLogger('GET', endpoint, undefined, headers);

  const response = await api.get(endpoint, { headers: { ...headers } });
  await responseLogger(response);

  return response;
};

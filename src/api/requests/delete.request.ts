import { APIResponse, request } from '@playwright/test';
import { requestLogger, responseLogger } from '../../helpers/api/logger.helper';

export const deleteRequest = async (endpoint: string, headers: Record<string, string> = {}): Promise<APIResponse> => {
  const api = await request.newContext();
  requestLogger('DELETE', endpoint);

  const response = await api.delete(endpoint, { headers: { ...headers } });
  await responseLogger(response);

  return response;
};

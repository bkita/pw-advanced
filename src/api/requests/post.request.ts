import { APIResponse, request } from '@playwright/test';
import { requestLogger, responseLogger } from '../../helpers/api/logger.helper';
import { APIPayload } from '../models/payload.model';

export async function postRequest(
  endpoint: string,
  payload: APIPayload,
  headers: Record<string, string> = {},
): Promise<APIResponse> {
  const api = await request.newContext();
  requestLogger('POST', endpoint, payload, headers);

  const response = await api.post(endpoint, { data: payload });
  await responseLogger(response);

  return response;
}

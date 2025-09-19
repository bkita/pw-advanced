import { APIResponse } from '@playwright/test';

export const parseResponse = async <T>(response: APIResponse): Promise<T> => {
  return response.json() as Promise<T>;
};

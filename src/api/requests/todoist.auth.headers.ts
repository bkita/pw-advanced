/* eslint-disable @typescript-eslint/naming-convention */
export const TODOIST_AUTH_HEADERS = {
  Authorization: `Bearer ${process.env.API_KEY ?? ''}`,
};

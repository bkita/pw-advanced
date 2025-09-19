import { ProjectColor } from './project.color.enum';

export interface ProjectPayload {
  name: string;
  color: ProjectColor;
  [key: string]: unknown;
}

export interface ProjectResponse {
  id: string;
  name: string;
  [key: string]: unknown;
}

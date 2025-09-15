import { Page } from '@playwright/test';
import { Logger } from 'tslog';

export abstract class BaseModal {
  protected log = new Logger();

  constructor(protected page: Page) {}
}

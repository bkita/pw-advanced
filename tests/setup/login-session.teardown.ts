import { test as teardown } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { Logger } from 'tslog';
import { LOGIN_SESSION } from '../../playwright.config';

teardown('cleanup login session', () => {
  const log = new Logger();
  log.info('🚀 TEARDOWN FUNCTION');

  const sessionPath = path.resolve(__dirname, LOGIN_SESSION);
  if (fs.existsSync(sessionPath)) {
    fs.unlinkSync(sessionPath);
    log.info('👍 TEARDOWN FUNCTION - LOGIN_SESSION DELETED!');
  }
});

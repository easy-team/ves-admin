import DB from '../lib/db/base';
declare module 'ves' {
  interface Application {
    db: DB;
  }

  interface Context {
    db: DB;
  }
}
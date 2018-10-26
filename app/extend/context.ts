'use strict';
import { Context } from 'ves';
import DB from '../lib/db/base';
export default {
  get db(this: Context): DB {
    return this.app.db;
  }
};
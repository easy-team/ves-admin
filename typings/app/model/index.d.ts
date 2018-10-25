// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Article from '../../../app/model/article';
import Artilcedetail from '../../../app/model/artilcedetail';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof Article>;
    Artilcedetail: ReturnType<typeof Artilcedetail>;
    User: ReturnType<typeof User>;
  }
}

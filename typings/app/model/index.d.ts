// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
  }
}

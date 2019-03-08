// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/service/article';

declare module 'egg' {
  interface IService {
    article: ExportArticle;
  }
}

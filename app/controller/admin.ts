import { Controller } from 'ves';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Article from '../model/article';
import Condition from '../lib/condition';

export default class AdminController extends Controller {

  public async login(ctx) {
    await ctx.renderClient('admin/login/login.js', {});
  }

  public async home(ctx) {
    await ctx.render('admin/home/home.js', { url: ctx.url.replace(/\/admin/, '') });
  }

  public async list(ctx) {
    const condition = deserialize(Condition, ctx.request.body);
    ctx.body = await ctx.service.article.getArtilceList(condition);
  }

  public async add(ctx) {
    const article = deserialize(Article, ctx.request.body);
    ctx.body = await ctx.service.article.saveArticle(article);
  }

  public async del(ctx) {
    const { id  } = ctx.request.body;
    ctx.body = await ctx.service.article.deleteArticle(id);
  }

  public async detail(ctx) {
    const { id } = ctx.params;
    ctx.body = await ctx.service.article.query({ id });
  }
}
'usestrict';
import { Controller, Context } from 'ves';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Condition from '../lib/condition';

export default class AdminController extends Controller {
  public async home(ctx: Context) {
    const result = await ctx.service.article.getArtilceList(new Condition());
    await this.ctx.render('index.js', result);
  }

  public async list(ctx: Context) {
    const condition = deserialize(Condition, ctx.query);
    this.ctx.body = await ctx.service.article.getArtilceList(condition);
  }

  public async detail(ctx: Context) {
    const id = ctx.ctx.query.id;
  }
}
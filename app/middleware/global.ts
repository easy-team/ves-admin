import { Context } from 'ves';
export default () => {
  return async function global(ctx: Context, next: any) {
    ctx.locals.title = 'ves-admin';
    ctx.locals.keywords = 'ves,vue ssr';
    ctx.locals.description = 'vue ssr framwork';
    ctx.locals.locale = ctx.query.locale || 'cn';
    ctx.locals.origin = ctx.request.origin;
    await next();
  };
};
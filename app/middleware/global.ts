import { Context } from 'ves';
export default () => {
  return async function global(ctx: Context, next: any) {
    ctx.locals.locale = ctx.query.locale || 'cn';
    ctx.locals.origin = ctx.request.origin;
    await next();
  };
};
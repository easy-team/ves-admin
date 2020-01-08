
import { Application } from 'ves';

export default (application: Application) => {
  const { router, controller } = application;
  router.get('/', controller.index.home);
  router.get('/login', controller.admin.login);
  router.post('/admin/api/article/list', controller.admin.list);
  router.post('/admin/api/article/add', controller.admin.add);
  router.post('/admin/api/article/del', controller.admin.del);
  router.get('/admin/api/article/:id', controller.admin.detail);
  router.get('/admin(.*?)', controller.admin.index);
};

import { Application } from 'ves';

export default (application: Application) => {
  const { router, controller } = application;
  router.post('/admin/api/article/list', controller.home.list);
  router.post('/admin/api/article/add', controller.home.add);
  router.post('/admin/api/article/del', controller.home.del);
  router.get('/admin/api/article/:id', controller.home.detail);
  router.get('/login', controller.home.login);
  router.get('/*', controller.home.index);
};
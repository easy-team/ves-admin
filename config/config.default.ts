import { Application, EggAppConfig } from 'ves';
import * as fs from 'fs';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const exports: any = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
    'global'
  ];

  exports.security = {
    csrf: {
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  };

  return exports;
};

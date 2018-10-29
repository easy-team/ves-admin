import * as path from 'path';
import { Application, EggAppConfig } from 'ves';

export default (app: EggAppConfig) => {
  const exports: any = {};

  exports.view = {
    cache: false
  };

  exports.development = {
    watchDirs: ['app'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['public', 'config'], // 指定过滤的目录（包括子目录）
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  return exports;
};

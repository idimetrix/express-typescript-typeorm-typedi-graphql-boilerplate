import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { registerController } from 'cron-decorators';

export const cronLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    // registerController([__dirname + '/../api/jobs/**/*.ts']);

    registerController([__dirname + '/../api/controllers/JobsController.ts']);
  }
};

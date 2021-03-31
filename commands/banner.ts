import chalk from 'chalk';
import * as figlet from 'figlet';

import log from '../src/log';

figlet.text(process.argv[2], (error: any, data: any): never => {
  if (error) {
    return process.exit(1);
  }

  log.log(chalk.blue(data), '');

  return process.exit(0);
});

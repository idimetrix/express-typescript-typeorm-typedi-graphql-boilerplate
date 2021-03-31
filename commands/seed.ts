import chalk from 'chalk';
import commander from 'commander';
import * as path from 'path';
import { importSeed, runSeeder, useSeeding } from 'typeorm-seeding';
import { loadFiles } from 'typeorm-seeding/dist/utils/file.util';

// Cli helper
commander
  .version('1.0.0')
  .description('Run database seeds of your project')
  .option('-L, --logging', 'enable sql query logging')
  .option('--factories <path>', 'add filepath for your factories')
  .option('--seeds <path>', 'add filepath for your seeds')
  .option('--run <seeds>', 'run specific seeds (file names without extension)', (val: string): string[] => val.split(','))
  .option('--config <file>', 'path to your ormconfig.json file (must be a json)')
  .parse(process.argv);

// Get cli parameter for a different factory path
const factoryPath: string = commander.factories ? commander.factories : 'src/database/factories';

// Get cli parameter for a different seeds path
const seedsPath: string = commander.seeds ? commander.seeds : 'src/database/seeds/';

// Get a list of seeds
const listOfSeeds: string[] = commander.run ? commander.run.map((l: string) => l.trim()).filter((l: string) => l.length > 0) : [];

// Search for seeds and factories
const run = async (): Promise<any> => {
  const log = console.log;

  await useSeeding();

  let factoryFiles;
  let seedFiles;
  try {
    factoryFiles = loadFiles([`${factoryPath}/*`]);
    seedFiles = loadFiles([`${seedsPath}/*`]);
  } catch (error) {
    return handleError(error);
  }

  // Filter seeds
  if (listOfSeeds.length > 0) {
    seedFiles = seedFiles.filter((sf) => listOfSeeds.indexOf(path.basename(sf).replace('.ts', '')) >= 0);
  }

  // Status logging to print out the amount of factories and seeds.
  log(chalk.bold('seeds'));
  log(
    '🔎 ',
    chalk.gray.underline(`found:`),
    chalk.blue.bold(`${factoryFiles.length} factories`, chalk.gray('&'), chalk.blue.bold(`${seedFiles.length} seeds`))
  );

  // Show seeds in the console
  for (const seedFile of seedFiles) {
    try {
      let className = seedFile.split('/')[seedFile.split('/').length - 1];
      className = className.replace('.ts', '').replace('.js', '');
      className = className.split('-')[className.split('-').length - 1];

      log('\n' + chalk.gray.underline(`executing seed:  `), chalk.green.bold(`${className}`));

      const seedFileObject: any = await importSeed(seedFile);

      await runSeeder(seedFileObject);
    } catch (error) {
      console.error('Could not run seed ', error);
      process.exit(1);
    }
  }

  log('\n👍 ', chalk.gray.underline(`finished seeding`));
  process.exit(0);
};

const handleError = (error) => {
  console.error(error);
  process.exit(1);
};

run();

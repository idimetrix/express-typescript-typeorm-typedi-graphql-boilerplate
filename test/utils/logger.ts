import { configure, transports } from 'winston';

export const configureLogger: () => void = (): void => {
  configure({
    transports: [
      new transports.Console({
        level: 'none',
        handleExceptions: false,
      }),
    ],
  });
};

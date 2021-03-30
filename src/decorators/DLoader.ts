import { Container, Constructable } from 'typedi';

import { createDataLoader, CreateDataLoaderOptions } from '../lib/graphql';

export function DLoader<T>(obj: Constructable<T>, options: CreateDataLoaderOptions = {}): ParameterDecorator {
  return (object: any, propertyKey: string | symbol, index: number) => {
    const dataLoader = createDataLoader(obj, options);
    const propertyName = propertyKey ? propertyKey.toString() : '';
    Container.registerHandler({ object, propertyName, index, value: () => dataLoader });
  };
}

export * from '../lib/graphql';

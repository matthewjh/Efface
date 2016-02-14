import {
  run, 
  start, 
  end, 
  DefaultContext
} from '../../src/index';

interface IFunction {
  (...args: any[]): void;
}

export interface IModality {
  name: string;
  run(fn: IFunction): void;
}

export const MODALITIES: IModality[] = [
  {
    name: 'Implicit Start/End',
    run: fn => {
      start();
      fn();
      end();
    }
  },
  {
    name: 'Implicit Run',
    run: fn => {
      run(fn);
    }
  },
  {
    name: 'Explicit Start/End',
    run: fn => {
      let context = new DefaultContext();

      context.start();
      fn();
      context.end();
    }
  }
];

import {DefaultContext} from './default-context';
import {ContextStackRunner} from './context/facade';

interface IFunction {
  (...args: any[]): void;
}

let stackRunner = new ContextStackRunner(() => new DefaultContext());

export function start() {
  stackRunner.start();
}

export function end() {
  stackRunner.end();
}

export function run(fn: IFunction) {
  let context = new DefaultContext();

  context.start();
  fn();
  context.end();
}

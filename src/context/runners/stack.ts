import {IContext} from '../abstract';

interface IContextFactory {
  (): IContext;
}

export class ContextStackRunner {
  private _createContext: IContextFactory;
  private _stack: IContext[];

  constructor(createContext: IContextFactory) {
    this._createContext = createContext;
    this._stack = [];
  }

  start() {
    let context = this._createContext();

    this._stack.push(context);
    context.start();
  }

  end() {
    let activeContext = this._stack[this._stack.length - 1];

    activeContext.end();
    this._stack.pop();
  }
}

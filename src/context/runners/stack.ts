import {ContextStack} from '../stack';
import {IContext} from '../abstract';

interface IContextFactory {
  (): IContext;
}

export class ContextStackRunner {
  private _createContext: IContextFactory;
  private _stack: ContextStack;

  constructor(createContext: IContextFactory) {
    this._createContext = createContext;
    this._stack = new ContextStack();
  }

  start() {
    let context = this._createContext();

    this._stack.push(context);
    context.start();
  }

  end() {
    this._stack.activeContext.end();
    this._stack.pop();
  }
}

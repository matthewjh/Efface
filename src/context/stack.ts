import {IContext} from './abstract/';

export class ContextStack {
  private _contexts: IContext[];

  constructor() {
    this._contexts = [];
  }

  push(context: IContext) {
    this._contexts.push(context);
  }

  pop(): IContext {
    return this._contexts.pop();
  }

  get activeContext() {
    return this._contexts[this._contexts.length - 1];
  }
}

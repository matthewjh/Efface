import {IContext} from './abstract';
import {IPlugin} from '../plugins/facade';

export class Context implements IContext {
  private _plugins: IPlugin[];

  constructor(plugins: IPlugin[]) {
    this._plugins = plugins;
  }

  start() {
    this._plugins.forEach(p => {
      p.onContextStart();
    });
  }

  end() {
    this._plugins.forEach(p => {
      p.onContextEnd();
    })
  }
}

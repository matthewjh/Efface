import {IPlugin} from '../plugins/facade';

export class Context {
  private _plugins: IPlugin[];

  constructor(plugins: IPlugin[]) {
    this._plugins = plugins;
  }

  start() {
    
  }

  end() {

  }
}

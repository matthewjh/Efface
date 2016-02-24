import {IBridge} from './abstract';
import {
  IPlugin,
  IPluginController
} from '../abstract';
import {Plugin} from './plugin';

export let pluginController = new (class implements IPluginController {
  private _bridge: IBridge = {
  };

  constructor() {
    this._install();
  }

  getNewPlugin(): IPlugin {
    return new Plugin(this._bridge);
  }

  private _install(): void {
    console.log('install');
  }
})();

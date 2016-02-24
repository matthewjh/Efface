import {
  IPlugin,
  IPluginController
} from '../abstract';
import {Plugin} from './plugin';

export let pluginController = new (class implements IPluginController {

  getNewPlugin(): IPlugin {
    return new Plugin();
  }

})();

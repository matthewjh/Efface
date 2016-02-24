import {IContext, Context} from './context/facade';
import {
  IPlugin,
  globalPropertiesPluginController,
  asyncTasksPluginController
} from './plugins/facade';

export class DefaultContext implements IContext {
  private _context: IContext;
  
  constructor() {
    let defaultPlugins: IPlugin[] = [
      globalPropertiesPluginController.getNewPlugin(),
      asyncTasksPluginController.getNewPlugin()
    ];

    this._context = new Context(defaultPlugins);
  }

  start() {
    this._context.start();
  }

  end() {
    this._context.end();
  }
}

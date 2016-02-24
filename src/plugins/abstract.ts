export interface IPluginControllerBridge {
}

export interface IPluginController {
  getNewPlugin(): IPlugin;
}

export interface IPlugin {
  onContextStart(): void;
  onContextEnd(): void;
}

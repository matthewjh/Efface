import {difference} from 'lodash';
import {IPlugin} from './abstract';

export class GlobalPropertiesPlugin implements IPlugin {
  private _ownKeysAtStart: string[];

  onContextStart() {
    this._ownKeysAtStart = Object.getOwnPropertyNames(global);
  }

  onContextEnd() {
    let ownKeysNow = Object.getOwnPropertyNames(global);
    let diff = difference(ownKeysNow, this._ownKeysAtStart);
    
    this._deleteProperties(diff);
  }

  private _deleteProperties(keys: string[]) {
    keys.forEach(k => {
      delete global[k];
    });
  }
}

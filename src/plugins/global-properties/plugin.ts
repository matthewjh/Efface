import {difference} from 'lodash';
import {IPlugin} from '../abstract';

function deleteProperties(keys: string[]) {
  keys.forEach(k => {
    delete global[k];
  });
}

export class Plugin implements IPlugin {
  private _ownKeysAtStart: string[];

  onContextStart() {
    this._ownKeysAtStart = Object.getOwnPropertyNames(global);
  }

  onContextEnd() {
    let ownKeysNow = Object.getOwnPropertyNames(global);
    let diff = difference(ownKeysNow, this._ownKeysAtStart);
    
    deleteProperties(diff);
  }
};

import {difference} from 'lodash';
import {IBridge} from './abstract';
import {IPlugin} from '../abstract';

export class Plugin implements IPlugin {
  private _ownKeysAtStart: string[];

  constructor(private _bridge: IBridge) {}

  onContextStart() {
  }

  onContextEnd() {
  }
};

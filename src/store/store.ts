import Tabs from './Tabs.store';

export class Store {
  tabs: Tabs;

  constructor() {
    this.tabs = new Tabs(this);
  }
}

export default new Store();

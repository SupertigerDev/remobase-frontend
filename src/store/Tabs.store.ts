import { makeAutoObservable } from 'mobx';
import { Store } from './store';
import Tab from './Tab.store';

export default class Tabs {
  store: Store;

  tabs: { [keyof: string]: Tab };

  totalTabsCount: number;

  selectedTabId: number;

  constructor(store: Store) {
    this.store = store;
    this.totalTabsCount = 0;
    this.selectedTabId = 0;
    this.tabs = {};
    makeAutoObservable(this, { store: false });
  }

  createTab(title: string, Component: any) {
    const tab = new Tab(this.totalTabsCount, title, Component);
    this.tabs[this.totalTabsCount] = tab;
    this.changeTab(tab.id);
    this.totalTabsCount += 1;
  }

  changeTab(tabId: number) {
    this.selectedTabId = tabId;
  }

  get tabsArray() {
    return Object.values(this.tabs);
  }
}

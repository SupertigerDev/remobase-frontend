import { makeAutoObservable } from 'mobx';
import { AiFillHome } from 'react-icons/ai';
import DrawerNew from '../components/DrawerNew';
import TabNew from '../components/TabNew';
import { Store } from './store';
import Tab from './Tab.store';

interface CreateTabData {
  title: string;
  Icon: any;
  Component: any;
  DrawerComponent: any;
}

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
    this.createHomeTab();
  }

  createTab(data: CreateTabData) {
    const tab = new Tab({
      id: this.totalTabsCount,
      title: data.title,
      Icon: data.Icon,
      Component: data.Component,
      DrawerComponent: data.DrawerComponent,
    });
    this.tabs[this.totalTabsCount] = tab;
    this.changeTab(tab.id);
    this.totalTabsCount += 1;
  }

  createHomeTab() {
    this.createTab({
      title: 'New Tab',
      Icon: AiFillHome({ color: 'yellow', size: '18px' }),
      Component: TabNew,
      DrawerComponent: DrawerNew,
    });
  }

  changeTab(tabId: number) {
    this.selectedTabId = tabId;
  }

  close(id: number) {
    if (this.selectedTabId === id) {
      const tabIndex = this.tabsArray.findIndex((tab) => tab.id === id);
      const nextTab = this.tabsArray[tabIndex + 1];
      const previousTab = this.tabsArray[tabIndex - 1];
      if (nextTab) this.changeTab(nextTab.id);
      else if (previousTab) this.changeTab(previousTab.id);
    }
    delete this.tabs[id];
    if (!this.tabsArray.length) {
      this.createHomeTab();
    }
  }

  get selectedTab() {
    return this.tabs[this.selectedTabId];
  }

  get tabsArray() {
    return Object.values(this.tabs);
  }
}

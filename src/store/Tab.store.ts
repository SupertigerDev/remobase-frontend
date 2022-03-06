import { makeAutoObservable } from 'mobx';

interface Data {
  id: number;
  title: string;
  Icon: any;
  Component: any;
}

export default class Tab {
  id: number;

  title: string;

  Icon: any;

  Component: any;

  constructor(data: Data) {
    makeAutoObservable(this);
    this.id = data.id;
    this.title = data.title;
    this.Icon = data.Icon;
    this.Component = data.Component;
  }
}

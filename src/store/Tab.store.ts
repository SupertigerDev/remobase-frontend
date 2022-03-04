import { makeAutoObservable } from 'mobx';

export default class Tab {
  id: number;

  name: string;

  Component: any;

  constructor(id: number, name: string, Component: any) {
    makeAutoObservable(this);
    this.id = id;
    this.name = name;
    this.Component = Component;
  }
}

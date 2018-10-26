'use strict';
import Condition from '../condition';
import * as shortid from 'shortid';
export default class DB {
  public instance: any;
  public name: string;
  constructor(name: string = 'blog.json') {
    this.name = name;
  }

  public getUniqueId() {
    return shortid.generate();
  }

  public get(collectionName: string) {
    return null;
  }

  public query(collectionName: string, json: object) {
    return null;
  }

  public add(collectionName: string, json: object) {
    return null;
  }

  public update(collectionName: string, where: object, json: object) {
    return null;
  }

  public delete(collectionName: string, field: any) {
    return null;
  }

  public getPager(collectionName: string, condition: Condition): any {
    return null;
  }
}
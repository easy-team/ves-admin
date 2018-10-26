'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';

export default class Article {
  @JsonProperty('id')
  public id: string;
  @JsonProperty('title')
  public title: string | undefined;
  @JsonProperty('summary')
  public summary: string | undefined;
  @JsonProperty('categoryId')
  public categoryId: number | undefined;
  @JsonProperty('tag')
  public tag: string | undefined;
  @JsonProperty('categoryId')
  public authorId: number | undefined;
  @JsonProperty('createTime')
  public createTime: number | undefined;
  @JsonProperty('hits')
  public hits: number;
  @JsonProperty('url')
  public url: string | undefined;
  @JsonProperty('status')
  public status: number | undefined;

  constructor() {
    this.id = '';
    this.title = undefined;
    this.summary = undefined;
    this.tag = undefined;
    this.hits = 0;
    this.createTime = Date.now();
  }
}
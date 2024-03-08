import { uid } from 'uid';

export interface CategoryParam {
  name: string;
  children?: Category;
  parent?: Category;
}

export class Category {
  id: string;
  name: string;
  children?: Category;
  parent?: Category;

  constructor(params: CategoryParam) {
    this.id = uid();
    this.name = params.name;
    this.children = params.children;
    this.parent = params.parent;
  }
}

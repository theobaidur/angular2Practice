import { Injectable } from '@angular/core';
import {Class} from "./class";

@Injectable()
export class ClassService {

  constructor() { }
  classList:Array<Class> = [];

  getList() {
    return this.classList;
  }

  addClass(classData:Class){
    this.classList.push(classData);
  }

  getOne(index:number){
    return this.classList[index] || new Class();
  }

  removeAll(){
    this.classList = [];
  }

  removeOne(index:number){
    this.classList.splice(index,1);
  }
}

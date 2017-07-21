import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial';

@Injectable()
export class TutorialsService {
  tutorials: Array<Tutorial> = [];

  getList(){
    return this.tutorials;
  }

  addTutorial(data:Tutorial){
    this.tutorials.push(data);
  }

  getOne(index:number){
      return this.tutorials[index] || {};
  }

  constructor() { }

}


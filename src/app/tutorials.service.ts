import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TutorialsService {
  serviceUrl:string ='http://localhost/angularapi.php';
  tutorials: Array<Tutorial> = [];

  getList(){
    return this._http.get(this.serviceUrl)
        .map((response:Response)=> response.json());
  }

  addTutorial(data:Tutorial){
      return this._http.post(this.serviceUrl, data)
          .map((response:Response)=>this.tutorials = response.json());

  }

  getOne(index:number){
      return this.tutorials[index] || {};
  }

  constructor(private _http: Http) { }

}


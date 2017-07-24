import {Component, OnInit, EventEmitter} from '@angular/core';
import {Class} from "../class";
import {ClassService} from "../class.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  inputs: ['panelTitle'],
  outputs: ['titleChange']
})
export class ClassComponent implements OnInit {
  panelTitle = "Class List";
  titleChange = new EventEmitter();

  constructor(public _classServce: ClassService) { }

  classList:Array<Class> = [];

  classModel = this._classServce.getOne(-1);

  ngOnInit() {
    this.classList = this._classServce.getList();
  }

  onTitleChange(title){
    console.log(title);
   this.titleChange.emit(title);
  }

  onSubmit(formData:Class){
    this.classList.push(formData);
  }

  removeItem(index:number){
    this._classServce.removeOne(index);
  }

  log(input:any){
    console.log(input);
  }
}

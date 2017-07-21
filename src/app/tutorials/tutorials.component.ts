import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
  inputs: ['panelTitle'],
    outputs: ['tutorialListChange','titleChange']
})
export class TutorialsComponent implements OnInit{
    public panelTitle = "Tutorial list";
    public tutorialList = [];
    public tutorialModel = {};
    public oldTutorialList = [];
    public tutorialListChange = new EventEmitter<any>();
    public titleChange = new EventEmitter<any>();

    resetModel(){
        this.tutorialModel = {
            name:'',
            link:''
        }
    }
  constructor() {
        this.resetModel();
  }

  ngOnInit() {
  }

  remove(index:any){
        this.tutorialList.splice(index,1);
  }

  insertTutorial(){
      this.tutorialList.push(this.tutorialModel);
  }

  onSubmit(){
        this.insertTutorial();
        this.resetModel();
  }

    ngDoCheck(){
        // console.log("checking");
      if(this.tutorialList.length != this.oldTutorialList.length){
          this.tutorialListChange.emit(this.tutorialList);
          this.oldTutorialList = this.tutorialList;
      }
    }

    onTitleChange(data){
        this.titleChange.emit(data);
    }


}

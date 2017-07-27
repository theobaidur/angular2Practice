import {Component, OnInit, EventEmitter} from '@angular/core';
import {TutorialsService} from "../tutorials.service";
import {Tutorial} from "../tutorial";

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
        this.tutorialModel = new Tutorial('','');
    }
  constructor(private _tutorialService: TutorialsService) {}

  ngOnInit() {
        this._tutorialService.getList().subscribe(data=>this.tutorialList = data);

  }

  remove(index:any){
        this.tutorialList.splice(index,1);
  }

  insertTutorial(){
      this.tutorialList.push(this.tutorialModel);
  }

  onSubmit(formData:any){
      console.log(formData);
      this._tutorialService.addTutorial(formData).subscribe(data=>this.tutorialList = data);
        // this.insertTutorial();
        // this.resetModel();
  }

  log(data){
      console.log(data);
  }

    onTitleChange(data){
       // this.titleChange.emit(data);
    }


}

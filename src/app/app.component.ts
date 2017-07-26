import {Component, OnInit} from '@angular/core';
import { InstructorsComponent } from './instructors/instructors.component';
import {TutorialsService} from "./tutorials.service";
import {ClassService} from './class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TutorialsService, ClassService]
})
export class AppComponent implements OnInit{
  title = 'app 2';
  panel1Title = 'Tutorial list';
  panel2Title = 'Instructor list';
  panel3Title = 'Class list';

  tutorials = [];
  classList = [];
  constructor(private _tutorialService: TutorialsService, private _classService: ClassService){

  }

  ngOnInit(){
    this._tutorialService.getList();
    this.classList = this._classService.getList();
  }
  updateTutorials(data){
    this.tutorials = data;
  }
}

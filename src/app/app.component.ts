import {Component, OnInit} from '@angular/core';
import { InstructorsComponent } from './instructors/instructors.component';
import {TutorialsService} from "./tutorials.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TutorialsService]
})
export class AppComponent implements OnInit{
  title = 'app 2';
  panel1Title = 'Tutorial list';
  panel2Title = 'Instructor list';
  tutorials = [];
  constructor(private _tutorialService: TutorialsService){

  }

  ngOnInit(){
    this.tutorials = this._tutorialService.getList();
  }
  updateTutorials(data){
    this.tutorials = data;
  }
}

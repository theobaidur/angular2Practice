import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Tutorial} from "../tutorial";
import {TutorialsService} from "../tutorials.service";

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  inputs: [`panelTitle`]
})
export class InstructorsComponent implements OnInit {
  public panelTitle = "Instructors list";
  public instructorList = [];
  public turialList:Array<Tutorial> = [];

  public instructorForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    tutorial: new FormControl(),
    socialMedia: new FormGroup({
      facebook: new FormControl(),
      twitter: new FormControl(),
      google: new FormControl()
    })
  });
  constructor(private _tutorialService: TutorialsService) { }

  ngOnInit() {
    this.turialList = this._tutorialService.getList();
  }

  getTutorialInfo(index:number){
    return this._tutorialService.getOne(index);
  }

  onSubmit(){
    this.instructorList.push(this.instructorForm.value);
    console.log(this.instructorForm.value);
  }

}

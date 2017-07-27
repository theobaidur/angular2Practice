import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Tutorial} from "../tutorial";
import {TutorialsService} from "../tutorials.service";
import {Observable} from "rxjs";
import {InstructorsService} from "../instructors.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  inputs: [`panelTitle`]
})
export class InstructorsComponent implements OnInit {
  public panelTitle = "Instructors list";
  public instructorList = [];
  public turialList:Array<any> = [];
  public currentInstructor:any = null;

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
  constructor(private _tutorialService: TutorialsService, private _instructorService:InstructorsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this._tutorialService.getList().subscribe(data => this.turialList = data);
    this.instructorList = this._instructorService.getList();
    this.route.params.subscribe((param: Params)=>{
      this.currentInstructor = param['id'];
    });
  }

  getTutorialInfo(index:number){
    return this._tutorialService.getOne(index);
  }

  onSubmit(){
    this._instructorService.addClass(this.instructorForm.value);

  }

  isActive(index:number){
    return index == this.currentInstructor;
  }

}

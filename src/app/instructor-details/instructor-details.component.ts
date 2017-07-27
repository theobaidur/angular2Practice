import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {InstructorsService} from "../instructors.service";
import {TutorialsService} from "../tutorials.service";

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  instructor:any;
  currentid:number;

  constructor(private route: ActivatedRoute, private _instructorService:InstructorsService, private _tutorialService:TutorialsService, private router:Router) { }


  /*ngOnInit() {
    let index = this.route.snapshot.params['id'];
    this.instructor = this._instructorService.getOne(index);
  }*/

  loadDetails(){
    this.instructor = this._instructorService.getOne(this.currentid);
  }

  ngOnInit(){
    this.route.params.subscribe((param: Params)=>{
      this.currentid = parseInt(param['id']);
      this.loadDetails();
    });
  }

  getTutorialInfo(index:number){
    return this._tutorialService.getOne(index);
  }

  goNext(){
    this.router.navigate(['/instructors', this.currentid+1]);
  }

  goPrev(){
    this.router.navigate(['/instructors', this.currentid-1]);
  }

  goBack(){
    this.router.navigate(['/instructors', {id : this.currentid}]);
  }



}

import { Component, OnInit } from '@angular/core';
import {TutorialsService} from "../tutorials.service";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  constructor(private _http: TutorialsService) { }

  ngOnInit() {
  }

}

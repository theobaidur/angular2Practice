import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css'],
  inputs: [`panelTitle`]
})
export class InstructorsComponent implements OnInit {
  public panelTitle = "Instructors list"
  constructor() { }

  ngOnInit() {
  }

}

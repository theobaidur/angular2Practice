import { Component } from '@angular/core';
import { InstructorsComponent } from './instructors/instructors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app 2';
  panel1Title = 'Tutorial list';
  panel2Title = 'Instructor list';
  tutorials = [];

  updateTutorials(data){
    this.tutorials = data;
  }
}

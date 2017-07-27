import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ClassComponent} from "../class/class.component";
import {TutorialsComponent} from "../tutorials/tutorials.component";
import {InstructorsComponent} from "../instructors/instructors.component";
import {InstructorDetailsComponent} from "../instructor-details/instructor-details.component";

const route: Routes = [
  {path: 'classes', component: ClassComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'instructors/:id', component: InstructorDetailsComponent}
]

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ClassComponent, TutorialsComponent, InstructorsComponent, InstructorDetailsComponent];
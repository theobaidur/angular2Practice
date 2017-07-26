import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { CampusComponent } from './campus/campus.component';
import { LocationComponent } from './location/location.component';
import { ShoolComponent } from './school/shool.component';
let routes = [
    {path: 'classes', component: ClassComponent},
    {path: 'tutorials', component: TutorialsComponent},
    {path: 'instructors', component: InstructorsComponent},
    ]

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    InstructorsComponent,
    StudentComponent,
    ClassComponent,
    CampusComponent,
    LocationComponent,
    ShoolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

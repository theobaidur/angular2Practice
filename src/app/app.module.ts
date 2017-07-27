import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { StudentComponent } from './student/student.component';
import { CampusComponent } from './campus/campus.component';
import { LocationComponent } from './location/location.component';
import { ShoolComponent } from './school/shool.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CampusComponent,
    LocationComponent,
    ShoolComponent,
    routingComponents,
    ClassDetailComponent,
    InstructorDetailsComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

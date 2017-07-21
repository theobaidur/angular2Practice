import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { InstructorsComponent } from './instructors/instructors.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    InstructorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

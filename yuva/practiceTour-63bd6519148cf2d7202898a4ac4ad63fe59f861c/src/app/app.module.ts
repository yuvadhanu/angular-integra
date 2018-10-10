import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {NavigateModule} from './navigate/navigate.module'

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';




@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StudentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,FormsModule,NavigateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

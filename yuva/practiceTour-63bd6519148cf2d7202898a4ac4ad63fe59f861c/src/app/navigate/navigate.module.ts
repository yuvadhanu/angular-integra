import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';

import {StaffComponent} from '../staff/staff.component';
import {TestComponent} from '../test/test.component';

const navRoute :Route[]=[
  {path:'',redirectTo:"/test",pathMatch:'full'},
  {path:'staff' ,component:StaffComponent},
  {path:'test',component:TestComponent}

];



@NgModule({
  imports: [ RouterModule.forRoot(navRoute)],
  exports: [ RouterModule],
  declarations: []
})
export class NavigateModule { }

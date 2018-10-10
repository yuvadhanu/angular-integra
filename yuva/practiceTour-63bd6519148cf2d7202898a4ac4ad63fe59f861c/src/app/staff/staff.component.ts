import { Component, OnInit } from '@angular/core';
import {Twoway} from '../twoway';
import {ProvideService} from '../provide.service';
// import {empArray} from '../mock-db';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
public selectedList : Twoway;
// public empList = empArray;
empList : Twoway[];

constructor( private myProvider:ProvideService){}

  ngOnInit() {
   this.getService();
  }
  
// empList :Twoway[]=[
//   {id:1,name:'abcd'},
//   {id:2,name:'dbdfb'},
//   {id:3,name:'gffg'},
//   {id:4,name:'fnytn'},

// ];
onSelect(listOfStaff:Twoway){
this.selectedList = listOfStaff;
}
 
getService(){
  this.empList = this.myProvider.getDatabase();
}
}

import { Component, OnInit, Input } from '@angular/core';
import {Twoway} from '../twoway';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() listInput:Twoway;
}

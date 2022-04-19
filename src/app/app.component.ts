import { Component } from '@angular/core';

import employeeData from "./employee.json";

interface Employee
{
  id:number;
  name:string;
  email:string;
  cmp:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mngjson';

  employees:Employee[]=employeeData;
}

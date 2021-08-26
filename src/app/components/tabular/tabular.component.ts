
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {
private employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
   this.reademployeis();
  }
  reademployeis(){
    this.employeeService.readEmployees().subscribe(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
    )
  }

}

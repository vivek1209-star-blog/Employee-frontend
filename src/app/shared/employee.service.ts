import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  createEmployee(employee:Employee){
    return this.http.post(this.baseUrl+'/create',employee,{headers:this.headers});
  }
  readEmployees(_employee:Employee){
    return this.http.get(this.baseUrl+'/read',{headers:this.headers});
  }
}

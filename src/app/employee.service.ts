import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getEmployeesReportingToManager(mangerId: number): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/${mangerId}`);
  }
}

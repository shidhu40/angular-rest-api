import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";

export class Employee{
  constructor(
    public id:string,
    public employee_name:string,
    public employee_salary:string,
    public employee_age:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

	constructor( private httpClient:HttpClient ) { 
     
	}
	
	baseUrl = "http://dummy.restapiexample.com/api/v1";
    URL= "http://localhost/php-api/upload.php";
	
	public getEmployees()
	{
		return this.httpClient.get<Employee[]>(this.baseUrl+'/employees');
	}
	
	public createEmployee(employee) {
		return this.httpClient.post<Employee>(this.URL, employee);
	}
	
	public deleteEmployee(id: number){
		return this.httpClient.delete(this.baseUrl+'/delete/'+id)
	}
	
	public getEmployeeById(id: number): Observable<HttpClientService> {
		return this.httpClient.get<HttpClientService>(this.baseUrl+'/employees/' + id);
	}
	
	public updateEmployee(employee: Employee): Observable<HttpClientService> {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
		
		return this.httpClient.put<HttpClientService>(this.baseUrl + +'/update/' + employee.id, employee, httpOptions);
	}
  
}
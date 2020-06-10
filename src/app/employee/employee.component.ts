import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from "@angular/router";


@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	employees:string[];
	
	constructor(
		private router: Router,
		private httpClientService:HttpClientService
	) { }


	
	ngOnInit() {
		this.httpClientService.getEmployees().subscribe(
			 response =>{ 
				console.log(response);
				this.employees=response.data;
				console.log(this.employees);
			}
		);
	};
 
	
	deleteEmployee(id: number): void {
		this.httpClientService.deleteEmployee(id)
		  .subscribe( data => {
				console.log(data);
				this.router.navigate(['/']);
		  })
	};
}
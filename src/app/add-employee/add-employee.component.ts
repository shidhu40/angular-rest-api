import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClientService, Employee } from '../service/http-client.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-add-employee',
	templateUrl: './add-employee.component.html',
	styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
	
	
	@ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
	fileUploadForm: FormGroup;
	fileInputLabel: string;

	constructor(
		private formBuilder: FormBuilder,
		private httpClientService: HttpClientService,
		private router: Router
	) { }
	
	

	ngOnInit(): void {
		this.fileUploadForm = this.formBuilder.group({
			myfile: [''],
			name:['']
		});
	}

	uploadFile(event) {
		//let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			// console.log(file);
		
			/* if (!_.includes(af, file.type)) {
				alert('Only EXCEL Docs Allowed!');
			} else {
				this.fileInputLabel = file.name;
				this.fileUploadForm.get('myfile').setValue(file);
			} */


			this.fileInputLabel = file.name;
			this.fileUploadForm.get('myfile').setValue(file);
		}
	}
  
  
	submitForm(){
		if (!this.fileUploadForm.get('myfile').value) {
			alert('Please fill valid details!');
			return false;
		}
		
		
		var formData: any = new FormData();
		
		formData.append('formFile', this.fileUploadForm.get('myfile').value);
		formData.append('name', this.fileUploadForm.get('name').value);
		
		this.httpClientService.createEmployee(formData)
			.subscribe( data => {
				 this.router.navigate(["employees"]);
        });
		
	};
}
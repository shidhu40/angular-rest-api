import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';  
import { DataTablesModule } from 'angular-datatables'; 

  
@NgModule({  
  declarations: [  
    AppComponent, EmployeeComponent, AddEmployeeComponent, HeaderComponent, FooterComponent 
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule ,
	DataTablesModule
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
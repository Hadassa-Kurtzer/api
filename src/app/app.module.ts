import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {MatToolbarModule,} from '@angular/material/Toolbar'; 
import {MatInputModule,} from '@angular/material/Input'; 
import {MatIconModule,} from '@angular/material/Icon'; 
import {MatCardModule,} from '@angular/material/Card'; 
import {MatSidenavModule,} from '@angular/material/Sidenav'; 
import {MatFormFieldModule,} from '@angular/material/form-field'; 
import { MatTooltipModule,} from '@angular/material/Tooltip'; 
import {MatMenuModule,} from '@angular/material/Menu'; 
import {MatDatepickerModule,} from '@angular/material/Datepicker'; 
import {MatNativeDateModule,} from '@angular/material/core'; 
import {MatButtonModule,} from '@angular/material/button'; 
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule
  ],
  providers: [HttpClientModule, EmployeeService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

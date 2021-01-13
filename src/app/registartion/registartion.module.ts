import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { VerficationComponent } from './verfication/verfication.component';
import { RegistrationComponent } from './registration.component';
import { RegistrationroutingModule } from './registrationrouting.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
@NgModule({
  declarations: [PersonaldetailsComponent, CompanydetailsComponent, VerficationComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationroutingModule,
    CdkStepperModule,
    NgStepperModule,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistartionModule { }

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Companydetail } from 'src/app/models/companydetail';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.scss']
})
export class CompanydetailsComponent implements OnInit {
  @Output() next = new EventEmitter<string>();
  @Output() back = new EventEmitter<string>();
  companyDetails:FormGroup;
  Companydetail:Companydetail=new Companydetail();
  imageSrc: string | ArrayBuffer='../../../assets/dummy-image.png';
  constructor(private fb:FormBuilder) { }
  isChecked:boolean=false;
  ngOnInit(): void {
    this.companyDetails= this.fb.group({
      'companyname':['',[Validators.required]],
      'emailid':['',[Validators.required,Validators.email]],
      'jobtitle':['',[Validators.required]],
      'yearofexp':['',[Validators.required,Validators.pattern("[0-9]")]],
    });
  }

   //for trigger a verfication detail form by @output method
   gotoverfication()
   {
     this.Companydetail.companyName=this.f.companyname.value;
     this.Companydetail.imgurl=this.imageSrc;
     this.Companydetail.jobtitle=this.f.jobtitle.value;
     this.Companydetail.emailid = this.f.email.value;
     this.Companydetail.yearsofexperience=parseInt(this.f.yearofexp.value);
     this.next.emit('');
   }

   check(event)
   {
    if(event.target.checked)
    {
      this.isChecked = true;
    }else 
    {
      this.isChecked = false;
    }
   }

  //for trigger a previous page
  backtoprevious()
  {
    this.back.emit();
  }

  //func for show image on profile
  preview(event): void {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
}

  //getter for get a formcontrol values;
  get f()
  {
    return this.companyDetails.controls;
  }

}

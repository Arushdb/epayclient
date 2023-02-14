import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyItem } from '../interfaces/my-item';
import { StudentService } from '../services/student.service';
import { SubscriptionContainer } from 'src/app/shared/subscription-container';
import { Location } from '@angular/common';

@Component({
  selector: 'app-studentfee',
  templateUrl: './studentfee.component.html',
  styleUrls: ['./studentfee.component.css']
})
export class StudentfeeComponent implements OnInit {

 
  feepending: string;
 
  feeForm: FormGroup;
  busystatus:boolean=false;
  show: boolean;

  subs = new SubscriptionContainer();
  spinnerstatus: boolean = false;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private studentservice: StudentService,
    private location: Location,


    private elementRef: ElementRef) { }

  // convenience getter for easy access to form fields
  get f() {

    return this.feeForm.controls;
  }



  ngOnDestroy(): void {
    debugger;
    this.subs.dispose();
    this.elementRef.nativeElement.remove();

  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.feepending = "";
    this.show = false;
    this.submitted = false;
    

   
   


    this.feeForm = this.formBuilder.group({
  
      rollnumber: ['',[Validators.required,Validators.minLength(6)]],
    
      semester: ['',Validators.required],
     
      programname: [''],
      studentname: [''],
      feeamount: [''],
      latefee: [''],
      labfee: [''],
      totalfee: [''],
      pendingsemester: [''],



    });

  }

  submit(form:NgForm) {
    debugger;
    this.submitted=true;
    if (form.invalid)
      return;
    let myfeeform: any;
    myfeeform = this.feeForm.getRawValue();
    this.busystatus=true
    this.subs.add = this.studentservice.getStudentDetail(myfeeform).subscribe(res => {
      this.show = true;

      let totalfee: string;
      totalfee = String(parseFloat(res[0].amount) + parseFloat(res[0].labfee) + parseFloat(res[0].latefee));
      this.f.feeamount.setValue(res[0].amount);
      this.f.studentname.setValue(res[0].studentname);
      this.f.latefee.setValue(res[0].latefee);
      this.f.labfee.setValue(res[0].labfee);
      this.f.programname.setValue(res[0].programname);
      this.f.pendingsemester.setValue(res[0].semestercode);

      this.f.totalfee.setValue(totalfee);

      this.feepending = res[0].feepending;

      //this.feeForm.get('feeamount').setValue(res[0].amount);
      this.busystatus=false;

    }, err => {
      console.log(err);
      this.studentservice.log(err.error.message);
      this.feeForm.reset();
      this.busystatus=false;
    });


  }
}


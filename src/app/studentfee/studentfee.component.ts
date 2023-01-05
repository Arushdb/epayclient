import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyItem } from '../interfaces/my-item';

@Component({
  selector: 'app-studentfee',
  templateUrl: './studentfee.component.html',
  styleUrls: ['./studentfee.component.css']
})
export class StudentfeeComponent implements OnInit {

  rolldata=[];
  pgmdata:MyItem[]=[];
  pgmwidth:string;

  pgmlabel: string;
  feeForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
   
    private elementRef: ElementRef ) { }

  ngOnInit(): void {
    this.pgmwidth="100%";
   
    //this.pgmlabel="Enter Program";
    this.pgmdata.push
    ({id:'1',label:"Program-1"},
    {id:'2',label:"Program-2"},
    {id:'3',label:"Program-3"},);


    this.feeForm = this.formBuilder.group({
      //title: ['', Validators.required],
      appnumber: [''],
      firstName: ['', Validators.required],
      fatherFirstName: ['', Validators.required],
      fatherMiddleName: [''],
      fatherLastName: ['']

  });

}
}

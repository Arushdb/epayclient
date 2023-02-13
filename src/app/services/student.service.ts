import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string;
  application = "epay";
  constructor(private httpclient: HttpClient,
    private messagesrv: MessageService) {
    this.url = environment.url;
  }





  getStudentDetail(form) {

    var myurl = this.url + "/api/test/student";
    let headers: HttpHeaders = new HttpHeaders();

    let param: HttpParams = new HttpParams();
    console.log("rollnumber", form.rollnumber);
    param = param
      .set('rollno', form.rollnumber)
      .set('semestercode', form.semester);

    console.log("Arush Param", param);
    return this.httpclient.get(myurl, { headers, params: param, responseType: 'json' });

  }

  getApplicantDetail(form) {
    var myurl = this.url + "/api/test/applicant";
    let headers: HttpHeaders = new HttpHeaders();

    let param: HttpParams = new HttpParams();

    param = param
      .set('appno', form.applicationno);
    return this.httpclient.get(myurl, { headers, params: param, responseType: 'json' });

  }


  getAdmissionDetail(form) {
    var myurl = this.url + "/api/test/admission";
    let headers: HttpHeaders = new HttpHeaders();

    let param: HttpParams = new HttpParams();

    param = param
      .set('appno', form.applicationno);
    return this.httpclient.get(myurl, { headers, params: param, responseType: 'json' });

  }

  getcertificate(form) {
    var myurl = this.url + "/api/test/certificate";
    let headers: HttpHeaders = new HttpHeaders();
    debugger;

    let param: HttpParams = new HttpParams();
    let semary:Array<string>=[];
    if(form.sm1===true)
    semary.push('SM1'); 
    if(form.sm2===true)
    semary.push('SM2'); 
    if(form.sm3===true)
    semary.push('SM3'); 
    if(form.sm4===true)
    semary.push('SM4'); 
    if(form.sm5===true)
    semary.push('SM5'); 
    if(form.sm6===true)
    semary.push('SM6'); 
    if(form.sm7===true)
    semary.push('SM7'); 
    if(form.sm8===true)
    semary.push('SM8'); 
    if(form.sm9===true)
    semary.push('SM9'); 
    if(form.sm10===true)
    semary.push('SM10'); 
    if(form.sm11===true)
    semary.push('SM11'); 
    if(form.sm12===true)
    semary.push('SM12'); 
    
       param = param
      .set('enrolno', form.enrolno)
      .set('dob',form.dob)
      .set('semesters',semary.toString());

    return this.httpclient.post(myurl,form, { params: param, responseType: 'json' });
    //return this.httpclient.get(myurl, { headers, params: param, responseType: 'json' });

  }




  gethostelfee(form) {
    var myurl = this.url + "/api/test/hostel";
    let headers: HttpHeaders = new HttpHeaders();

    let param: HttpParams = new HttpParams();

    param = param
      .set('applno', form.applicationno)
      .set('rollno', form.rollno)
      .set('mode', form.mode);

      return this.httpclient.post(myurl,form, { params: param, responseType: 'json' });

  }

  getpostfee(form) {
   
      var myurl = this.url + "/api/test/post";
      let headers: HttpHeaders = new HttpHeaders();
  
      let param: HttpParams = new HttpParams();
  
      param = param
        .set('appno', form.applicationno);
      return this.httpclient.get(myurl, { headers, params: param, responseType: 'json' });

  }

  public log(message: string) {
    this.messagesrv.clear();
    this.messagesrv.add(`Student Service: ${message}`);
  }

  public clear() {
    this.messagesrv.clear();
  }
}

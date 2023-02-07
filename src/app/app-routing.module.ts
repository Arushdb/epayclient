import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationfeeComponent } from './applicationfee/applicationfee.component';
import { CertificatefeeComponent } from './certificatefee/certificatefee.component';
import { MainComponent } from './main/main.component';
import { StudentfeeComponent } from './studentfee/studentfee.component';

const routes: Routes = [
  
    //basic routes
    {path:'',redirectTo:'main',pathMatch:'full'},
  
    {path:'student',component:StudentfeeComponent},
    {path:'main',component:MainComponent},
    {path:'applicationfee',component:ApplicationfeeComponent,data:{feetype:"appfee"}},
    {path:'newadmissionfee',component:ApplicationfeeComponent,data:{feetype:"newadm"}},
    {path:'migcertificate',component:CertificatefeeComponent,data:{certificatetype:"mig"}},
    {path:'degcertificate',component:CertificatefeeComponent,data:{certificatetype:"deg"}},
    {path:'trncertificate',component:CertificatefeeComponent,data:{certificatetype:"trn"}},
    {path:'procertificate',component:CertificatefeeComponent,data:{certificatetype:"pro"}},
    {path:'rescertificate',component:CertificatefeeComponent,data:{certificatetype:"res"}},

    
    
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

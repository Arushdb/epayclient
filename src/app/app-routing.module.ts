import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StudentfeeComponent } from './studentfee/studentfee.component';

const routes: Routes = [
  
    //basic routes
    {path:'',redirectTo:'main',pathMatch:'full'},
    {path:'student',component:StudentfeeComponent},
    {path:'main',component:MainComponent},

    
    
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

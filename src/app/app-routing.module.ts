import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';


const routes:Routes = [
  {path:'application', component:JobApplicationComponent,pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { WorksamplesComponent } from './worksamples/worksamples.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  {path: '/portfolio', component: WorksamplesComponent},
  {path: '/resume', component: ResumeComponent},
  {path: '/contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

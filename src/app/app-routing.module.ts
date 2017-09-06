import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksamplesComponent } from './worksamples/worksamples.component';
import { ContactComponent } from './contact/contact.component';

import { AngularComponent } from './worksamples//angular/angular.component';
import { JavascriptComponent } from './worksamples//javascript/javascript.component';
import { HtmlComponent } from './worksamples//html/html.component';
import { WordpressComponent } from './worksamples//wordpress/wordpress.component';
import { PythonComponent } from './worksamples//python/python.component';
import { SocialMediaComponent } from './worksamples//social-media/social-media.component';

const routes: Routes = [
  {path: 'portfolio',
   component: WorksamplesComponent,
   children:
    [ {path: '', component: AngularComponent},
      {path: 'angular', component: AngularComponent},
      {path: 'javascript', component: JavascriptComponent},
      {path: 'html', component: HtmlComponent},
      {path: 'wordpress', component: WordpressComponent},
      {path: 'python', component: PythonComponent},
      {path: 'social-media', component: SocialMediaComponent}]},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  {path: '*', component: WorksamplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

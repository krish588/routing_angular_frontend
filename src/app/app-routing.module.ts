import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AutogenerateComponent } from './autogenerate/autogenerate.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MainLandingPageSPCardComponent } from './main-landing-page-spcard/main-landing-page-spcard.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path:'autogenerateteam', component: AutogenerateComponent},
  {path:'myprofile', component:MyProfileComponent},
  {path:'',component:MainLandingPageSPCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [HomepageComponent]

import { MatFormFieldDefaultOptions } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

// import { NgModule, Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent} from './signup/signup.component';
import { ServiceProviderProfileComponent} from './service-provider-profile/service-provider-profile.component';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'angularx-social-login';
import { AutogenerateComponent } from './autogenerate/autogenerate.component';
import { MatTabsModule, MatCardModule, MatTabNav, MatTabContent, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IdeaViewComponent} from "./idea-view/idea-view.component";
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { IdeaViewService } from './idea-view.service';
import { IdeaServiceComponent} from "./idea-service/idea-service.component";
import { IdeahamsterService } from './ideahamster.service';
import { IhsidebarComponent} from './ihsidebar/ihsidebar.component';

import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { MainLandingPageSPCardComponent } from './main-landing-page-spcard/main-landing-page-spcard.component';
import { IndexPageFooterComponent } from './index-page-footer/index-page-footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainLandingPageIdeaCardComponent } from './main-landing-page-idea-card/main-landing-page-idea-card.component';
import { MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatBadgeModule,
         MatGridListModule,

 } from '@angular/material';
import { SpNavbarComponent } from './sp-navbar/sp-navbar.component';
import { SpsidebarComponent } from './spsidebar/spsidebar.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { IndexComponent } from './index/index.component';

import { MyProfileComponent } from './my-profile/my-profile.component';

const Materail = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule,

];

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '1078204311210-1h012vmgmrncursd4tk1jtsgcn7u7s7m.apps.googleusercontent.com'
    )
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AutogenerateComponent,
    IdeaViewComponent,
    SignupComponent,
    ServiceProviderProfileComponent,
    IdeaServiceComponent,

    
    IndexComponent,
    CardCarouselComponent,
    MainLandingPageSPCardComponent,
    IndexPageFooterComponent,
    MainLandingPageIdeaCardComponent,
    SpNavbarComponent,
    SpsidebarComponent,
    IhsidebarComponent,
   MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    Materail,

    MatBadgeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    NavbarModule,
    ButtonsModule,
    MatCardModule
  ],
  exports : [Materail],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    IdeaViewService,
    IdeahamsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

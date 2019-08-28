import { ServiceProviderProfileServiceService } from './../service-provider-profile-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.css']
})
export class ServiceProviderProfileComponent implements OnInit {

  public profile = [];
  constructor(private serviceProviderProfile: ServiceProviderProfileServiceService ) { }

  ngOnInit() {
    this.serviceProviderProfile.getProfileDetails()
        .subscribe(data => this.profile = data);
  }

  

}

import { Component, OnInit } from '@angular/core';
import { SpcardImplementationserviceService } from '../spcard-implementationservice.service';

@Component({
  selector: 'app-main-landing-page-spcard',
  templateUrl: './main-landing-page-spcard.component.html',
  styleUrls: ['./main-landing-page-spcard.component.css']
})
export class MainLandingPageSPCardComponent implements OnInit {

  public details;

  constructor(private spcardservice: SpcardImplementationserviceService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.spcardservice.getUser().subscribe((response) => {
        console.log(response);
        if (response) {
          this.details = response;
          console.log(this.details);
            // userForm.reset();
          }
        }, (err) => {
          console.log(err);
      });
      }

}


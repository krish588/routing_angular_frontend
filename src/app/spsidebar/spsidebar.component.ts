import { Component, OnInit } from '@angular/core';
import { SpcardImplementationserviceService } from '../spcard-implementationservice.service';

@Component({
  selector: 'app-spsidebar',
  templateUrl: './spsidebar.component.html',
  styleUrls: ['./spsidebar.component.css']
})
export class SpsidebarComponent implements OnInit {


  constructor(private spcardservice: SpcardImplementationserviceService) { }

  public details = [];

  ngOnInit() {
    this.spRecommendation();
  }

  spRecommendation() {
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

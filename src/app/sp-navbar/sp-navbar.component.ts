import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-navbar',
  templateUrl: './sp-navbar.component.html',
  styleUrls: ['./sp-navbar.component.css']
})
export class SpNavbarComponent implements OnInit {
  private router:Router;

  constructor() { }

  ngOnInit() {
  }
  toNavigate(){
    this.router.navigate(['/myprofile']);
  }

}

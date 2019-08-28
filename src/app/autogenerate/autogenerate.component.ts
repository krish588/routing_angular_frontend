import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { ServiceprovidersService } from '../serviceproviders.service';

@Component({
  selector: 'app-autogenerate',
  templateUrl: './autogenerate.component.html',
  styleUrls: ['./autogenerate.component.css']
})
export class AutogenerateComponent implements OnInit {
  
  
  tabs = ['Devloper', 'Tester', 'Designer'];
  selected = new FormControl(0);

  cards = [];
  sel = new FormControl(0);

  public serviceproviders = [];

  constructor(private _serviceProviders : ServiceprovidersService) {}

  ngOnInit() {
     this._serviceProviders.getServiceProviders()
     .subscribe(data=>this.serviceproviders=data);
  }

  addTab() {
    this.tabs.push('Role ');

    this.selected.setValue(this.tabs.length - 1);
    }
  

  addCard() {
    this.cards.push('{{serviceprovider.name}}');
    this.sel.setValue(this.cards.length - 1);
  
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  removeCard(cardindex: number) {
    this.serviceproviders.splice(cardindex, 1);
  }
}

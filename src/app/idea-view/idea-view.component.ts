import { Component, OnInit } from "@angular/core";
import { IdeaViewService } from "../idea-view.service";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-idea-view",
  templateUrl: "./idea-view.component.html",
  styleUrls: ["./idea-view.component.css"]
})
export class IdeaViewComponent implements OnInit {
  public details = [];
  cards = ["card1", "card2", "card3"];
  sel = new FormControl(0);
  //  isLoaded:boolean = true ;
  constructor(private ideaviewservice: IdeaViewService) {}
  ngOnInit() {
    this.ideaviewservice.getDetails().subscribe(data => (this.details = data));
  }
  removeCard(index: number) {
    this.cards.splice(index, 1);
  }
}

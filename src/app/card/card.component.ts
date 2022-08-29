import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {



  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() link: string;
  isDisabled: boolean;


  constructor() {
    this.title="Bienvenue .......";
    this.subtitle="Hello Algeria";
    this.description="description";
    this.link="http://nour.dz";
    this.isDisabled=true;

  }

  ngOnInit(): void {
  }

  OnClickActiver(){

    this.isDisabled = !this.isDisabled;

  }

  AfficheTitle(txts: string){
    this.title=txts;

  }


}

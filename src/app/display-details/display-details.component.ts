import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {


  isDetailsBeingDisplayed = false;
  clickCounter = 0;
  secretText = 'You are the best!';
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.clickCounter+=1;
    this.isDetailsBeingDisplayed = !this.isDetailsBeingDisplayed;
    const current = new Date();
    this.logs.push('Click '+ this.clickCounter + ' at ' + current.toLocaleTimeString());
  }

  getBackground(log: string){
    return this.getClickNumber(log) >= 5 ? 'blue': 'white';
  }

  getTextColor(log:string){
    return this.getClickNumber(log) >= 5 ? true : false;
  }

  getClickNumber(log:string){
    return Number.parseInt(log.split(' ')[1]);
  }

}

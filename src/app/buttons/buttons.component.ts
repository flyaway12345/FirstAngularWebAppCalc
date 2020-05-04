import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
 
  box1: number = null;
  box2: number = null;
  constructor() { }

  ngOnInit(): void {
  }
  result(){
    return (this.box1 * (this.box2/100));
    
  }
}

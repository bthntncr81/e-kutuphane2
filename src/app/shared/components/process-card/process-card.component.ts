import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements OnInit {
@Input() hasArrow:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}

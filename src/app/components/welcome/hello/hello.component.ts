import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1 *ngIf="name">Welcome to {{name}}!</h1>',
  styleUrls: ['./hello.component.scss'],
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}

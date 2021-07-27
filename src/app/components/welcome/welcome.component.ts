import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <app-hello name={{name}}></app-hello>

    <p>Animal Noise</p>
    <app-animal-noise animal="Tiger" noise="This is tiger" (makeNoise)="onMakeNoise($event)"></app-animal-noise>
    <hr>
  `,
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  onMakeNoise(noise) {
    alert(noise);
  }

}

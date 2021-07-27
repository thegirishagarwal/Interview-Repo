import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animal-noise',
  template: `<span>{{animal}}</span><br>
    <button (click)="onMakeNoise()">Make Noise!</button>`,
  styleUrls: ['./animal-noise.component.scss']
})
export class AnimalNoiseComponent implements OnInit {

  @Input() animal: string;
  @Input() noise: string;

  @Output() makeNoise = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMakeNoise() {
    this.makeNoise.emit(`${this.noise}`);
  }

}

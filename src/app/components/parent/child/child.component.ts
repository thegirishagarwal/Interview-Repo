import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  public title: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.title) {
      this.title = changes.title.currentValue;
    }
  }

}

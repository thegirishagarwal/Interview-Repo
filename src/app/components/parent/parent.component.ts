import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild('childComponent', {static: true}) childComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.childComponent.title = 'This is Child Component';
  }

}

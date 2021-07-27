import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalNoiseComponent } from './animal-noise.component';



@NgModule({
  declarations: [
    AnimalNoiseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AnimalNoiseComponent]
})
export class AnimalNoiseModule { }

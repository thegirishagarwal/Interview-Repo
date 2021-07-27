import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { HelloComponent } from './hello/hello.component';
import { AnimalNoiseModule } from '../animal-noise/animal-noise.module';



@NgModule({
  declarations: [
    WelcomeComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    AnimalNoiseModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

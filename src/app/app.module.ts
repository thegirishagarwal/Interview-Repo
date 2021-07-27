import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './components/welcome/welcome.module';
import { AnimalNoiseModule } from './components/animal-noise/animal-noise.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    AnimalNoiseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

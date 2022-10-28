import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { CustomTwoWayComponent } from './components/data-binding/custom-two-way/custom-two-way.component';
import { CounterComponent } from './components/data-binding/custom-two-way/counter.component';
import { TtClassDirective } from './directives/tt-class.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CustomTwoWayComponent,
    CounterComponent,
    TtClassDirective,
    CustomIfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomTwoWayComponent } from './components/data-binding/custom-two-way/custom-two-way.component';
import { CounterComponent } from './components/data-binding/custom-two-way/counter.component';
import { TtClassDirective } from './directives/tt-class.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { AsyncComponent } from './pipes/async/async.component';
import { HttpClientModule } from '@angular/common/http';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfAndFromComponent } from './observables/of-and-from.component';
import { FromEventComponent } from './observables/fromEvent.component';
import { PipeTapFilterMapComponent } from './observables/pipe-tap-filter-map.component';
import { MapSwitchMapComponent } from './observables/map-switchMap.component';
import { MergeMapComponent } from './observables/mergeMap.component';
import { ConcatMapComponent } from './observables/concatMap.component';
import { ExhaustMapComponent } from './observables/exhaustMap.component';
import { TakeComponent } from './observables/take.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CustomTwoWayComponent,
    CounterComponent,
    TtClassDirective,
    CustomIfDirective,
    AsyncComponent,
    LifeCycleHooksComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    FormArrayComponent,
    ObservablesComponent,
    OfAndFromComponent,
    FromEventComponent,
    PipeTapFilterMapComponent,
    MapSwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    TakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

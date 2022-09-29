import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentInputComponent } from './assignment-input/assignment-input.component';
import { AssignmentDisplayDetailsComponent } from './assignment-display-details/assignment-display-details.component';
import { BasicHighlightDirective } from './custom-directives/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-directives/better-highlight.directive';
import { UnlessDirective } from './custom-directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentInputComponent,
    AssignmentDisplayDetailsComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ServerComponent],
})
export class AppModule {}

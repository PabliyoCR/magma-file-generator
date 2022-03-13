import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBlocklyModule } from 'ngx-blockly';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'ngx-blockly/node_modules/blockly/blocks';
import { PreviewModule } from './shared/components/preview/preview.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBlocklyModule,
    PreviewModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

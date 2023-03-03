import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EwhainCheckComponent } from './ewhain-check/ewhain-check.component';
import { MemberJoinComponent } from './member-join/member-join.component';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EwhainCheckComponent,
    MemberJoinComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

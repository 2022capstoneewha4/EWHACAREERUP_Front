import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EwhainCheckComponent } from './authorize/ewhain-check/ewhain-check.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainHomeBeforeComponent } from './home/main-home-before/main-home-before.component';
import { MypageComponent } from './authorize/mypage/mypage.component';
import { InformationCheckComponent } from './authorize/information-check/information-check.component';
import { SignInComponent } from './authorize/sign-in/sign-in.component';
import { MypageModifyComponent } from './authorize/mypage-modify/mypage-modify.component';
import { SpecMoreComponent } from './authorize/spec-more/spec-more.component';
import { ActionMoreComponent } from './authorize/action-more/action-more.component';
import { ArchiveMoreComponent } from './authorize/archive-more/archive-more.component';
import { SignUpComponent } from './authorize/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EwhainCheckComponent,
    MainHomeComponent,
    MainHomeBeforeComponent,
    MypageComponent,
    InformationCheckComponent,
    SignInComponent,
    MypageModifyComponent,
    SpecMoreComponent,
    ActionMoreComponent,
    ArchiveMoreComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

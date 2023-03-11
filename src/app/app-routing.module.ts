import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainHomeBeforeComponent } from './home/main-home-before/main-home-before.component';
import { EwhainCheckComponent } from './authorize/ewhain-check/ewhain-check.component';
import { InformationCheckComponent } from './authorize/information-check/information-check.component';
import { SignUpComponent } from './authorize/sign-up/sign-up.component';
import { MypageComponent } from './authorize/mypage/mypage.component'
import { MypageModifyComponent } from './authorize/mypage-modify/mypage-modify.component';
import { SignInComponent } from './authorize/sign-in/sign-in.component';
import { ActionMoreComponent } from './authorize/action-more/action-more.component';
import { ArchiveMoreComponent } from './authorize/archive-more/archive-more.component';
import { SpecMoreComponent } from './authorize/spec-more/spec-more.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-home-before-component',
    pathMatch: 'full'
  },
  { path: 'main-home-component', component: MainHomeComponent },
  { path: 'main-home-before-component', component: MainHomeBeforeComponent },
  { path: 'ewhain-check-component', component: EwhainCheckComponent },
  { path: 'information-check-component', component: InformationCheckComponent },
  { path: 'sign-up-component', component: SignUpComponent },
  { path: 'mypage-component', component: MypageComponent },
  { path: 'sign-in-component', component: SignInComponent },
  { path: 'mypage-modify-component', component: MypageModifyComponent },
  { path: 'action-more-component', component: ActionMoreComponent },
  { path: 'archive-more-component', component: ArchiveMoreComponent },
  { path: 'spec-more-component', component: SpecMoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

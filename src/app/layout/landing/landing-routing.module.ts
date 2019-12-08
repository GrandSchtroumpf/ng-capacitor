import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('../../landing/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'signin',
      loadChildren: () =>
        import('../../auth/signin/signin.module').then(m => m.SigninModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

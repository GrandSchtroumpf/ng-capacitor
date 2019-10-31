import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job',
    pathMatch: 'full'
  },
  {
    path: 'job',
    loadChildren: () =>
      import('./job/root/root.module').then(m => m.JobRootPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

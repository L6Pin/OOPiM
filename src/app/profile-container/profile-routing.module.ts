import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileContainerComponent } from './profile-container.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileContainerComponent,
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path:"worker",
    component: WorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

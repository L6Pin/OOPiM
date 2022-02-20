import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { WorkerComponent } from './worker/worker.component';
import { MaterialModule } from '../material-module.module';

@NgModule({
  declarations: [AdminComponent, StaffComponent, WorkerComponent],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule],
})
export class ProfileModule {}

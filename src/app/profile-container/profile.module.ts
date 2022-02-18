import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { WorkerComponent } from './worker/worker.component';
import { problemsFacade } from '../Store/Facade/problems.facade';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AdminComponent, StaffComponent, WorkerComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}

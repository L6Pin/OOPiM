import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { WorkerComponent } from './worker/worker.component';
import { MaterialModule } from '../material-module.module';
import { ProblemsTableComponent } from './problems-table/problems-table.component';
import { ProfileContainerComponent } from './profile-container.component';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
  declarations: [AdminComponent, StaffComponent, WorkerComponent, ProblemsTableComponent, ProfileContainerComponent, SupplierComponent],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule],
})
export class ProfileModule {}

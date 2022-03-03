import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemModRoutingModule } from './problem-mod-routing.module';
import { EditProblemComponent } from './edit-problem/edit-problem.component';
import { MaterialModule } from '../material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProblemComponent } from './add-problem/add-problem.component';

@NgModule({
  declarations: [EditProblemComponent, AddProblemComponent],
  imports: [
    CommonModule,
    ProblemModRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ProblemModModule {}

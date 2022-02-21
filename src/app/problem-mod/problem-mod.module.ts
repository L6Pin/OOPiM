import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemModRoutingModule } from './problem-mod-routing.module';
import { AddProblemComponent } from './add-problem/add-problem.component';
import { EditProblemComponent } from './edit-problem/edit-problem.component';
import { MaterialModule } from '../material-module.module';

@NgModule({
  declarations: [AddProblemComponent, EditProblemComponent],
  imports: [CommonModule, ProblemModRoutingModule, MaterialModule],
})
export class ProblemModModule {}

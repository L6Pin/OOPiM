import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProblemComponent } from './add-problem/add-problem.component';
import { EditProblemComponent } from './edit-problem/edit-problem.component';

const routes: Routes = [
  { path: 'add', component: AddProblemComponent },
  { path: 'edit/:id', component: EditProblemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemModRoutingModule {}

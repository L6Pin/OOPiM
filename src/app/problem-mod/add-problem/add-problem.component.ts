import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.scss'],
})
export class AddProblemComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  addForm!: FormGroup;
  readonly loggedUserId$: Observable<any> = this.facade.loggedUser$;
  private loggedUser: any;

  addProblem() {
    this.facade.dispatchAddProblem(this.addForm.value);
  }

  ngOnInit(): void {
    this.loggedUserId$.subscribe((user) => (this.loggedUser = user.id));

    this.addForm = new FormGroup({
      problem_name: new FormControl(''),
      description: new FormControl(''),
      room: new FormControl(''),
      comment: new FormControl(''),

      status_id: new FormControl(1),
      creator_id: new FormControl(this.loggedUser),

      category_id: new FormControl(1),
      priority_id: new FormControl(1),
      user_id: new FormControl(1),
    });
  }
}

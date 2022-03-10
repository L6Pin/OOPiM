import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.scss'],
})
export class EditProblemComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private facade: problemsFacade
    
  ) {}

  editForm!: FormGroup
  problemData: any
  readonly user$: Observable<any> = this.facade.loggedUser$

  ngOnInit(): void {

    
    this.editForm = new FormGroup({
      problem_name: new FormControl(""),
      description: new FormControl(""),
      room: new FormControl(""),
      comment: new FormControl(""),
      status_id: new FormControl(""),
    });


    this.api
      .getSingleProblem(this.route.snapshot.params.id)
      .subscribe((res:any) => {
        this.editForm.setValue({
          problem_name: res.problem_name,
          description: res.description,
          room: res.room,
          comment: res.comment,
          status_id: res.status_id
        })
      })


      console.log(this.problemData)

  }
}


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  private worker: Observable<any> = this.facade.loggedUser$;

  ngOnInit(): void {
    this.worker.subscribe((user) => {
      this.facade.dispatchWorkerProblems(user);
    });
  }
}

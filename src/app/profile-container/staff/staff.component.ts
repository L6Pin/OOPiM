import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private facade: problemsFacade) {}

  private worker: Observable<any> = this.facade.loggedUser$;

  ngOnInit(): void {
    this.worker.subscribe((user) => {
      console.log(user)
      this.facade.dispatchStaffProblems(user);
    });
  }

}

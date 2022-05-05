import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  private worker: Observable<any> = this.facade.loggedUser$;


  ngOnInit(): void {
    this.worker.subscribe((user) => {
      console.log(user)
      if(user.is_admin) this.facade.dispatchAllProblems();
    });
  }
}

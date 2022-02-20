import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { problemsFacade } from '../Store/Facade/problems.facade';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
})
export class ProfileContainerComponent implements OnInit {
  constructor(private facade: problemsFacade, private router: Router) {}

  readonly userObject$: Observable<any> = this.facade.loggedUser$;

  ngOnInit(): void {
    this.userObject$.subscribe((user) => {
      if (user.is_admin) this.router.navigate(['profile/admin']);
      if (user.is_worker) this.router.navigate(['/profile/worker']);
      //is_manager - change to is_staff when backend changes are made
      if (user.is_manager) this.router.navigate(['/profile/staff']);
    });
  }
}

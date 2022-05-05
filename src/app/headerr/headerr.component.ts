import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from '../Store/Facade/problems.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss'],
})
export class HeaderrComponent {
  constructor(private facade: problemsFacade, private router: Router) {}

  readonly userSuccessfulLogin$: Observable<boolean> =
    this.facade.successfulLogin$;


    logOut(){
      this.router.navigate([`/`])
      this.facade.clearStateOnLogout()
    }
    
}


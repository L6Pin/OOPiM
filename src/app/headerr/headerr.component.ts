import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from '../Store/Facade/problems.facade';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss']
})
export class HeaderrComponent {


  constructor(private facade: problemsFacade) {}

  readonly userSuccessfulLogin$: Observable<boolean> = this.facade.successfulLogin$;

}

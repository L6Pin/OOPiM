import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from '../Store/Facade/problems.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  readonly userSuccessfulLogin$: Observable<boolean> = this.facade.successfulLogin$;

  ngOnInit(): void {}
}

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

  public userSuccessfulLogin$!: Observable<boolean>;

  ngOnInit(): void {
    this.userSuccessfulLogin$ = this.facade.successfulLogin$;
  }
}

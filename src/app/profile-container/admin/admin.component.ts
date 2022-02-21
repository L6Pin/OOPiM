import { Component, OnInit } from '@angular/core';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  ngOnInit(): void {
    this.facade.dispatchAllProblems();
  }
}

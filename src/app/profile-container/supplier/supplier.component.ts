import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(private facade: problemsFacade) { }

  private supplier: Observable<any> = this.facade.loggedUser$;


  ngOnInit(): void {
    this.supplier.subscribe((user) => {
      console.log(user)
      this.facade.dispatchSupplierProblems(user)
    });
  }

}

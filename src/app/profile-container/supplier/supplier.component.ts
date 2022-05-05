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
      if(user.is_supplier) this.facade.dispatchSupplierProblems(user)
    });
  }

}

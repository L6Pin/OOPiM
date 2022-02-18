import { Component, OnInit } from '@angular/core';
import { problemsFacade } from 'src/app/Store/Facade/problems.facade';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private facade: problemsFacade) {}

  loginForm!: FormGroup;
  readonly failedLogin$: Observable<any>  = this.facade.failedLogin$;

  loginUser() {
    this.facade.dispatchLoggedUser(this.loginForm.value);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}

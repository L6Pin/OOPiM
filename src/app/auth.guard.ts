import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { problemsFacade } from './Store/Facade/problems.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private facade: problemsFacade, private router: Router) {}

  readonly userSuccessfulLogin$: Observable<boolean> =
    this.facade.successfulLogin$;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userSuccessfulLogin$.pipe(
      map((loggedUser) =>
        loggedUser ? true : this.router.parseUrl('')
      )
    );
  }
}

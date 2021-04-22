import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './Authentication.service';
import { Observable, Subject } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: NzMessageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authenticationService.allowAnonymus === true) {
      return true;
    } else {
      if (localStorage.getItem('Qtoken') != null) {
        // tslint:disable-next-line: prefer-const
        let roles = route.data.permittedRoles as Array<string>;
        if (roles) {
          if (this.authenticationService.roleMatch(roles)) {
            return true;
          } else {
            this.messageService.create(
              'error',
              'You are Not Allowed to View this Module'
            );
            return false;
          }
        } else if (localStorage.getItem('Qtoken') != null) {
          return true;
        } else {
          this.router.navigate(['/Register'], {
            queryParams: {
              return: state.url,
            },
          });
          return false;
        }
      }
    }
  }
}

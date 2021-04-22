import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client, Logged } from '../Models/Client';
import { environment } from 'src/environments/environment.prod';
import { ClientService } from './Client.service';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from './AESEncryptDecrypt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // tslint:disable-next-line: max-line-length
  constructor(
    private http: HttpClient,
    public clientService: ClientService,
    private router: Router,
    // tslint:disable-next-line: align
    private aESEncryptDecryptService: AESEncryptDecryptService
  ) {
    this.resetLogged();
  }
  public currentUser: Observable<Client>;
  userrole = '';
  allowAnonymus = false;
  userId = 0;
  logged: Logged;
  isLoggedIn = false;
  Login(formData): any {
    return this.http.post(environment.ApiUrl + '/ApplicationUser', formData);
  }
  resetLogged() {
    this.logged = {
      id: 0,
      username: '',
      role: '',
    };
  }
  getpassloggedUser(): any {
    return this.http.get(environment.ApiUrl + '/ApplicationUser').toPromise();
  }
  getLoggedInUserDetails() {
    this.getpassloggedUser().then(
      (res: any) => {
        this.clientService.registeredUser = res;
      },
      (err: any) => {
        this.onLogout();
      }
    );
  }
  roleMatch(allowedRoles: any[]): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    const userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      if (userRole === element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  onLogout() {
    localStorage.removeItem('Qtoken');
    sessionStorage.removeItem('xid');
    this.clientService.isLoggedIn = false;
    this.clientService.ResetRegisteredUserData();
    this.router.navigate(['/Register']);
  }
  getProfile(): any {
    const payLoad = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    const id = payLoad.id;
    return this.http
      .get(environment.ApiUrl + '/Client/Users/' + id)
      .toPromise();
  }
}

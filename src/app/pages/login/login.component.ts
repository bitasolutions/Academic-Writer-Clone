import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Shared/Services/Authentication.service';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { Logged } from 'src/app/Shared/Models/Client';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logged: Logged;
  return: '';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService: NzMessageService,
    public clientService: ClientService,
    private aESEncryptDecryptService: AESEncryptDecryptService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientService.ResetUserData();
    if (localStorage.getItem('Qtoken') != null) {
      this.return = this.route.snapshot.queryParams['return'] || '/Register';
      this.authenticationService.onLogout();
    }
  }
  onSubmit(form: NgForm) {
    this.authenticationService.Login(form.value).subscribe(
      (res: any) => {
        this.logged = new Logged();
        localStorage.setItem('Qtoken', res.token);
        this.clientService.isLoggedIn = true;
        this.clientService.registeredUser = res.data;
        this.logged.id = this.clientService.registeredUser.ID;
        this.logged.username = this.clientService.registeredUser.Username;
        this.logged.role = this.clientService.registeredUser.role;
        const encryptedText = this.aESEncryptDecryptService.encrypt(
          JSON.stringify(this.logged)
        );
        sessionStorage.setItem('xid', encryptedText);
        if (this.logged.role == 'guest')
          this.router.navigateByUrl('/MyOrders/Manage');
        else  this.router.navigateByUrl('/backend/OrdersList');
      },
      (err: { status: number }) => {
        if (err.status == 400)
          this.messageService.create(
            'error',
            'Incorrect username or password.'
          );
        else console.log(err);
      }
    );
  }
}

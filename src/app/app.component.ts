import { Component, OnInit } from '@angular/core';
import { ClientService } from './Shared/Services/Client.service';
import { NgForm } from '@angular/forms';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';
import { AuthenticationService } from './Shared/Services/Authentication.service';
import { AESEncryptDecryptService } from './Shared/Services/AESEncryptDecrypt.service';
import { ActivatedRoute } from '@angular/router';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl`{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl`{
      display: block
    }`,
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StyleRenderer],
})
export class AppComponent implements OnInit {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);
  return: '';
  isCollapsed = true;
  Show: boolean;
  constructor(
    readonly sRenderer: StyleRenderer,
    public authenticationService: AuthenticationService,
    // tslint:disable-next-line: align
    public clientService: ClientService,
    private aESEncryptDecryptService: AESEncryptDecryptService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Show = true;
    this.reset();
    this.onLogout();
    this.route.queryParams.subscribe(
      (params) => (this.return = params.return || '/Register')
    );
    this.clientService.isLoggedIn = false;
  }
  reset(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    } else {
      this.resetVar();
    }
  }
  resetVar() {
    this.clientService.registeredUser = {
      ID: 0,
      Username: 'user',
      contact1: '',
      country: '',
      role: 'role',
      email: '',
      name: '',
    };
  }
  onLogout() {
    this.resetVar();
    this.authenticationService.onLogout();
  }
  notify(): void {
    console.log('notify');
  }
}

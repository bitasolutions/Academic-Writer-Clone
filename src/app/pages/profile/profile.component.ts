import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthenticationService } from './../../Shared/Services/Authentication.service';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Shared/Models/Client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public flat_class = 'e-flat';
  IsEditing: boolean;
  isValid: boolean = false;
  constructor(
    public clientService: ClientService,
    private authenticat: AuthenticationService,
    private messageService: NzMessageService
  ) {}


  ngOnInit(): void {
    this.IsEditing = true;
    this.authenticat.getProfile().then((res) => {
      this.clientService.userData = res as Client;
    });
  }
  OnStartEdit() {
    this.IsEditing = !this.IsEditing;
  }
  showErrorMessage(str: string) {
    this.messageService.create(
      'error',
      str
    );
  };
  validateForm() {
    this.isValid = true;
    if (this.clientService.userData.username.trim() == '') {
      this.showErrorMessage('Username is Required')
      this.isValid = false;
    }
    else if (this.clientService.userData.contact1.trim() == '') {
      this.showErrorMessage('Contact 1 is Required..')
      this.isValid = false;
    }
    else if (this.clientService.userData.email.trim() == '') {
      this.showErrorMessage('Email is Required..')
      this.isValid = false;
    }
    return this.isValid;
  }
  SaveUpdates() {
    if (this.validateForm()) {
      if (this.clientService.isLoggedIn) {
        this.clientService
          .SaveClient(this.clientService.userData)
          .subscribe((res) => {
            let response = JSON.stringify(res.toString());
            if (response.includes('Error')) {
              this.showErrorMessage(response);
            }
          });
      }
    }
  }
}

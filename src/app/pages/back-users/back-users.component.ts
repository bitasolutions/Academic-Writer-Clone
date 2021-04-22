import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClientRegistered, Client } from 'src/app/Shared/Models/Client';

@Component({
  selector: 'app-back-users',
  templateUrl: './back-users.component.html',
  styleUrls: ['./back-users.component.css'],
})
export class BackUsersComponent implements OnInit {
  isValid: boolean;
  constructor(
    public clientService: ClientService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.reset();
  }
  reset(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    } else {
      this.resetVar();
    }
    this.clientService.GetUsers().then((data) => {
      this.clientService.userList = data as ClientRegistered[];
    });
  }
  resetVar() {
    this.clientService.ResetUserData();
  }
  Update(id) {
    this.clientService.GetUsersById(id).then((data) => {
      this.clientService.userData.id = data.id;
      this.clientService.userData.firstName = data.firstName;
      this.clientService.userData.lastName = data.lastName;
      this.clientService.userData.username = data.username;
      this.clientService.userData.contact1 = data.contact1;
      this.clientService.userData.contact2 = data.contact2;
      this.clientService.userData.email = data.email;
      this.clientService.userData.role = data.role;
      this.clientService.userData.contact2 = data.contact2;
    });
  }
  RemoveUser(id) {
    if (id != null) {
      if (confirm('You want to Delete Selected Userrole.??')) {
        this.clientService.DeteteUser(id).subscribe((res) => {
          const response = JSON.stringify(res.toString());
          if (response.includes('Error')) {
            this.messageService.create('error', response);
          } else if (response.includes('Success')) {
            this.messageService.create('error', response);
            this.reset();
          }
        });
      }
    }
  }
  UpdatePassword(id) {}
  showErrorMessage(str: string) {
    this.messageService.create('error', str);
  }
  DataIsValid() {
    this.isValid = true;
    if (this.clientService.userData.firstName.trim() === '') {
      this.showErrorMessage('First Name is Required.');
      this.isValid = false;
    } else if (this.clientService.userData.lastName.trim() === '') {
      this.showErrorMessage('Last Name is Required.');
      this.isValid = false;
    } else if (this.clientService.userData.contact1.trim() === '') {
      this.showErrorMessage('User Contact is Required.');
      this.isValid = false;
    } else if (this.clientService.userData.email.trim() === '') {
      this.showErrorMessage('User Email Address is Required.');
      this.isValid = false;
    } else if (this.clientService.userData.role === '0') {
      this.showErrorMessage('You Have no Selected User role.');
      this.isValid = false;
    } else if (this.clientService.userData.id === 0) {
      if (
        this.clientService.userData.password !==
        this.clientService.userData.confirmPassword
      ) {
        this.showErrorMessage('Password Entered Dont Match.');
        this.isValid = false;
      }
    }
    return this.isValid;
  }
  OnSubmit(order: { value: any }) {
    if (this.DataIsValid()) {
      this.clientService.SaveClient(order.value).subscribe((res) => {
        const response = JSON.stringify(res.toString());
        if (response.includes('Error')) {
          this.messageService.create('error', response);
        } else if (response.includes('Success')) {
          this.reset();
        }
      });
    }
  }
}

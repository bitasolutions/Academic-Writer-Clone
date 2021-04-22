import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { AuthenticationService } from 'src/app/Shared/Services/Authentication.service';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(public clientService: ClientService, public authenticationService: AuthenticationService,
              private aESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit(): void {
    const text = sessionStorage.getItem('xid');
    if (text != null) {
      this.clientService.isLoggedIn = true;
      const json = JSON.parse(this.aESEncryptDecryptService.decrypt(text));
      this.clientService.registeredUser.role = json.role;
      this.clientService.registeredUser.Username = json.username;
      this.clientService.registeredUser.ID = json.id;
    }
  }
  Logout() {
   this.authenticationService.onLogout();
  }
}

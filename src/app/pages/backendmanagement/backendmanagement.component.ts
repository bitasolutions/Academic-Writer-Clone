import { OrderStatusService } from './../../Shared/Services/order-status.service';
import { AuthenticationService } from './../../Shared/Services/Authentication.service';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  MenuEventArgs,
  MenuItemModel,
} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-backendmanagement',
  templateUrl: './backendmanagement.component.html',
  styleUrls: ['./backendmanagement.component.css'],
})
export class BackendmanagementComponent implements OnInit {
  public menuItems: MenuItemModel[] = [
    {
      text: 'Orders',
      items: [
        { text: 'All Orders' },
        { text: 'Pending' },
        { text: 'Completed' },
        { text: 'InProgress' },
        { text: 'Assigned' },
        { text: 'Rejected' },
      ],
    },
    {
      text: 'Users',
      items: [
        { text: 'Clients' },
        { text: 'BackEnd Users' },
        { text: 'User Access Rights' },
        { text: 'Logout' },
      ],
    },
    {
      text: 'Management',
      items: [{ text: 'Prices' }, { text: 'Sidebar' }],
    },
  ];

  constructor(
    private router: Router,
    private clientService: ClientService,
    private authenticationService: AuthenticationService,
    private orderStatusService: OrderStatusService
  ) {}

  ngOnInit() {}

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

  itemSelect(args: MenuEventArgs) {
    if (args.item.text === 'All Orders') {
      this.router.navigate(['/backend/OrdersList']);
    }
    if (args.item.text === 'Pending') {
      this.router.navigate(['/backend/Pending/' + 0]);
    }
    if (args.item.text === 'Completed') {
      this.router.navigate(['/backend/Completed/' + 1]);
    }
    if (args.item.text === 'Assigned') {
      this.router.navigate(['/backend/Assigned/' + 2]);
    }
    if (args.item.text === 'InProgress') {
      this.router.navigate(['/backend/InProgress/' + 3]);
    }
    if (args.item.text === 'Rejected') {
      this.router.navigate(['/backend/Rejected/' + 4]);
    }
    if (args.item.text === 'BackEnd Users') {
      this.router.navigate(['/backend/Users']);
    }
    if (args.item.text === 'Clients') {
      this.router.navigate(['/backend/Clients']);
    }
    if (args.item.text === 'Prices') {
      this.router.navigate(['/backend/Prices']);
    }
    if (args.item.text === 'Logout') {
      this.onLogout();
    }
  }
}

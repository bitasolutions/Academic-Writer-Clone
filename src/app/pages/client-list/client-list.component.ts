import { ClientService } from 'src/app/Shared/Services/Client.service';
import { Client } from './../../Shared/Models/Client';
import { Component, OnInit } from '@angular/core';
import {
  ToolbarItems,
  SearchSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import { OrdersViewModel } from 'src/app/Shared/Models/OrdersViewModel';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  public pageSettings: Object;
  public toolbar: ToolbarItems[] | object;
  public format = { type: 'date', format: 'MMM dd,yyyy HH:mm:ss' };
  // tslint:disable-next-line: ban-types
  public customAttributes: Object;
  public searchOptions: SearchSettingsModel;
  listOfData: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.customAttributes = { class: 'customcss' };
    this.pageSettings = { pageSize: 15 };
    this.searchOptions = {
      fields: ['orderNumber', 'clientName', 'title'],
      operator: 'contains',
      key: '',
      ignoreCase: true,
    };

    this.toolbar = ['Search', 'Print', 'ExcelExport', { align: 'left' }];
    this.clientService.GetClientsList().then((res) => {
      this.listOfData = res as Client[];
    });
  }
}

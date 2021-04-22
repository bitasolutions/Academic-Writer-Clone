import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  SearchSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { OrdersViewModel } from 'src/app/Shared/Models/OrdersViewModel';
import { OrdersService } from 'src/app/Shared/Services/Orders.service';

@Component({
  selector: 'app-backend-orders-summary',
  templateUrl: './backend-orders-summary.component.html',
  styleUrls: ['./backend-orders-summary.component.css'],
})
export class BackendOrdersSummaryComponent implements OnInit {
  public pageSettings: Object;
  public toolbar: ToolbarItems[] | object;
  public format = { type: 'date', format: 'MMM dd,yyyy HH:mm:ss' };
  public customAttributes: Object;
  public searchOptions: SearchSettingsModel;
  listOfData: OrdersViewModel[] = [];

  public visible: Boolean = false;

  public position: any = { X: 100, Y: 100 };


  constructor(private orderService: OrdersService, private router: Router) {}

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
    this.orderService.GetOrdersList().then((res) => {
      this.listOfData = res;
    });
  }
  OnEdit(e) {
    this.router.navigate(['/backend/Orders-details/' + e.rowData.OrderNumber]);
    //alert(e.rowData.orderNumber);
  }
}

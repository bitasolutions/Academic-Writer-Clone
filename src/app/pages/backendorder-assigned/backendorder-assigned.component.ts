import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarItems, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';
import { OrdersViewModel } from 'src/app/Shared/Models/OrdersViewModel';
import { OrderStatusService } from 'src/app/Shared/Services/order-status.service';
import { OrdersService } from 'src/app/Shared/Services/Orders.service';

@Component({
  selector: 'app-backendorder-assigned',
  templateUrl: './backendorder-assigned.component.html',
  styleUrls: ['./backendorder-assigned.component.css']
})
export class BackendorderAssignedComponent implements OnInit {

 // tslint:disable-next-line: ban-types
 public pageSettings: Object;
 public toolbar: ToolbarItems[] | object;
 public format = { type: 'date', format: 'MMM dd,yyyy HH:mm:ss' };
 // tslint:disable-next-line: ban-types
 public customAttributes: Object;
 public searchOptions: SearchSettingsModel;
 listOfData: OrdersViewModel[] = [];
 constructor(
   private orderService: OrdersService,
   private router: Router,
   private orderStatusService: OrderStatusService,
   private currentRouter: ActivatedRoute
 ) {}

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
   const num = this.currentRouter.snapshot.paramMap.get('id');
   this.orderService.GetOrdersListByStatus(+num).then((res) => {
     this.listOfData = res;
   });
 }
 OnEdit(e) {
   this.router.navigate(['/backend/Orders-details/' + e.rowData.OrderNumber]);
 }

}

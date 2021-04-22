import { Pricing } from './../../Shared/Models/Pricing';
import { OrdersService } from 'src/app/Shared/Services/Orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DialogEditEventArgs,
  SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-backendorder-pricings',
  templateUrl: './backendorder-pricings.component.html',
  styleUrls: ['./backendorder-pricings.component.css'],
})
export class BackendorderPricingsComponent implements OnInit {
  @ViewChild('priceForm') public orderForm: FormGroup;
  // tslint:disable-next-line: ban-types
  public data: Object[];
  // tslint:disable-next-line: ban-types
  public editSettings: Object;
  public toolbar: string[];
  // tslint:disable-next-line: ban-types
  public orderidrules: Object;
  // tslint:disable-next-line: ban-types
  public requiredrules: Object;
  // tslint:disable-next-line: ban-types
  public numberRequiredRules: Object;
  // tslint:disable-next-line: ban-types
  public pageSettings: Object;
  // tslint:disable-next-line: ban-types
  public editparams: Object;

  public orderData = new Pricing();
  constructor(
    private ordersService: OrdersService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.ordersService.GetPricingUpdate().then((data: Pricing[]) => {
      this.data = data;
    });
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.orderidrules = { required: true, number: true };
    this.numberRequiredRules = { required: true, number: true };
    this.requiredrules = { required: true };
    this.editparams = { params: { popupHeight: '250px' } };
    this.pageSettings = { pageCount: 12 };
  }
  actionComplete(args: DialogEditEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      args.form.ej2_instances[0].rules = {};
      // Set initail Focus
      if (args.requestType === 'beginEdit') {
        (args.form.elements.namedItem('id') as HTMLInputElement).focus();
      }
    }
  }
  showErrorMessage(str: string) {
    this.messageService.create('error', str);
  }
  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData as Pricing);
    }
    if (args.requestType === 'save') {
      this.ordersService.SaveOrdersPrice(this.orderData).subscribe((res) => {
        const response = JSON.stringify(res.toString());
        if (response.includes('Error')) {
          this.messageService.create('error', response);
        } else if (response.includes('Success')) {
        }
      });
      args.data = this.orderData;
    }
  }
}

import { PaidOrders } from './../../Shared/Models/PaidOrder';
import { Subject } from 'rxjs';
import { Client } from 'src/app/Shared/Models/Client';
import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderViewModel } from 'src/app/Shared/Models/OrderDetails';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd';

const styles = {
  root: {
    width: '100%',
    maxWidth: '100%',
  },
};

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css'],
})
export class AdminOrderDetailsComponent implements OnInit {
  ordernumber = '';
  public date = new Date();
  public format = 'yyyy-MM-dd';
  isPaid = false;
  enableControls = true;
  orderDetails: OrderViewModel = new OrderViewModel();
  clientDetails: Client = new Client();
  readonly classes = this.theme.addStyleSheet(styles);
  // tslint:disable-next-line: ban-types
  public fields: Object = { text: 'Status', value: 'Id' };
  // tslint:disable-next-line: no-inferrable-types
  public height: string = '220px';
  // tslint:disable-next-line: no-inferrable-types
  public value: string = 'Status';
  // tslint:disable-next-line: ban-types
  today = new Date();

  // tslint:disable-next-line: ban-types
  public xdata: Object[] = [
    { Id: 'Pending', Status: 'Pending' },
    { Id: 'Completed', Status: 'Completed' },
    { Id: 'Assigned', Status: 'Assigned' },
    { Id: 'InProgress', Status: 'InProgress' },
    { Id: 'Rejected', Status: 'Rejected' },
  ];
  constructor(
    public currentRouter: ActivatedRoute,
    private theme: LyTheme2,
    public clientorderService: ClientOrdersService,
    private messageService: NzMessageService,
    private aESEncryptDecryptService: AESEncryptDecryptService
  ) {}

  ngOnInit(): void {
    const num = this.currentRouter.snapshot.paramMap.get('id');
    this.ordernumber = num;
    this.GetDetails(num);
    this.clientorderService.payment.paidDate = this.date;
    // this.clientorderService.payment.completeDate = this.GetCurrentDate();
  }
  private GetDetails(num: string) {
    this.clientorderService.payment = new PaidOrders();
    this.clientorderService
      .GetBackEndOrder(+num)
      .then(
        (data: {
          details: OrderViewModel;
          client: Client;
          payment: PaidOrders;
        }) => {
          this.orderDetails = data.details;
          this.clientDetails = data.client;
          this.isPaid = this.orderDetails.Paid === 'Paid' ? true : false;
          this.enableControls = this.isPaid;
          if (this.orderDetails.Paid === 'Paid') {
            this.clientorderService.payment = data.payment;
          }
        }
      );
  }

  private GetCurrentDate() {
    const date = moment(moment(), 'YYYY-MM-DD HH:MM:SS');
    return date;
  }
  showError(str: string) {
    this.messageService.create('error', str);
  }
  showSuccess(str: string) {
    this.messageService.create('success', str);
  }
  SetOrderStatus(status: any) {
    const orderno = +this.ordernumber;
    const date = this.today;
    this.clientorderService
      .FlagOrderStatus(status, orderno, date)
      .subscribe((data) => {
        const dataResponse = JSON.stringify(data.toString());
        if (dataResponse.includes('Error')) {
          this.showError(dataResponse);
        } else {
          this.showSuccess(dataResponse);
          this.GetDetails(this.ordernumber);
        }
      });
  }
  SwitchIsPaid() {}
  IsPaid() {
    const json = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    this.clientorderService.payment.orderNumber = +this.ordernumber;
    this.clientorderService.payment.orderAmount = this.orderDetails.OrderValue;
    this.clientorderService.payment.entryBy = +json.id;
    this.clientorderService.payment.entryDate = this.GetCurrentDate();
    this.clientorderService.FlagPaidOrder().subscribe((data) => {
      const dataResponse = JSON.stringify(data.toString());
      if (dataResponse.includes('Error')) {
        this.showError(dataResponse);
      } else {
        this.showSuccess(dataResponse);
        this.GetDetails(this.ordernumber);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-MyOrders',
  templateUrl: './MyOrders.component.html',
  styleUrls: ['./MyOrders.component.css']
})
export class MyOrdersComponent implements OnInit {
  date: any;
  constructor(public clientOrdersService: ClientOrdersService,
    // tslint:disable-next-line: align
    private router: Router, private aESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let json = JSON.parse(this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid')));
    this.clientOrdersService.LoadAllMyOrders(+json.id, -1);
    this.date = this.GetCurrentDate().utc().format('ddd, DD MMM YYYY');
  }
  private GetCurrentDate() {
    const cur = moment(moment(), 'YYYY-MM-DD');
    return cur;
  }
  ShowDetails(orderNumber) {
    this.router.navigate(['/MyOrders/details/' + orderNumber]);
  }
}

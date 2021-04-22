import { Component, OnInit } from '@angular/core';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {


  constructor(public clientOrdersService: ClientOrdersService, private router: Router,
    private aESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit() {
    let json = JSON.parse(this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid')));
    this.clientOrdersService.LoadAllMyOrders(+json.id, 0);
  }
  ShowDetails(orderNumber) {
    this.router.navigate(['/MyOrders/details/' + orderNumber]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {

  constructor(public clientOrdersService: ClientOrdersService, private router: Router,
    private aESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit() {
    let json = JSON.parse(this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid')));
    this.clientOrdersService.LoadAllMyOrders(+json.id, 1);
  }

  ShowDetails(orderNumber) {
    this.router.navigate(['/MyOrders/details/' + orderNumber]);
  }
}

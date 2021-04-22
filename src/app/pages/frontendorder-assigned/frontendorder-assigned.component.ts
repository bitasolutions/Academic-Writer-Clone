import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';

@Component({
  selector: 'app-frontendorder-assigned',
  templateUrl: './frontendorder-assigned.component.html',
  styleUrls: ['./frontendorder-assigned.component.css'],
})
export class FrontendorderAssignedComponent implements OnInit {
  constructor(
    public clientOrdersService: ClientOrdersService,
    private router: Router,
    private aESEncryptDecryptService: AESEncryptDecryptService
  ) {}

  ngOnInit() {
    const json = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    this.clientOrdersService.LoadAllMyOrders(+json.id, 2);
  }

  ShowDetails(orderNumber) {
    this.router.navigate(['/MyOrders/details/' + orderNumber]);
  }
}

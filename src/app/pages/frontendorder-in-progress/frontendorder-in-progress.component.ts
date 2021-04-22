import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';

@Component({
  selector: 'app-frontendorder-in-progress',
  templateUrl: './frontendorder-in-progress.component.html',
  styleUrls: ['./frontendorder-in-progress.component.css']
})
export class FrontendorderInProgressComponent implements OnInit {

  constructor(
    public clientOrdersService: ClientOrdersService,
    private router: Router,
    private aESEncryptDecryptService: AESEncryptDecryptService
  ) {}

  ngOnInit() {
    const json = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    this.clientOrdersService.LoadAllMyOrders(+json.id, 3);
  }

  ShowDetails(orderNumber) {
    this.router.navigate(['/MyOrders/details/' + orderNumber]);
  }

}

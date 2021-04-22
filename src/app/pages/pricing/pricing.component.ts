import { OrdersService } from 'src/app/Shared/Services/Orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.LoadAllMyOrders();
  }

  LoadAllMyOrders() {
    this.ordersService.GetPricingList().then((data) => {
      this.ordersService.nonTechnicalPricinglist = data.nontechnical;
      this.ordersService.technicalPricinglist = data.technical;
    });
  }
}

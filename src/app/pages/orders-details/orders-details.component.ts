import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LyTheme2 } from '@alyle/ui';
import { ClientOrdersService } from 'src/app/Shared/Services/ClientOrders.service';
import { OrderViewModel } from 'src/app/Shared/Models/OrderDetails';
const styles = {
  root: {
    width: '100%',
    maxWidth: '360px',
  },
};

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css'],
})
export class OrdersDetailsComponent implements OnInit {
  ordernumber = '';
  orderDetails: OrderViewModel;
  readonly classes = this.theme.addStyleSheet(styles);
  constructor(
    public currentRouter: ActivatedRoute,
    private theme: LyTheme2,
    public clientorderService: ClientOrdersService
  ) {}

  ngOnInit(): void {
    this.Reset();
    const num = this.currentRouter.snapshot.paramMap.get('id');
    this.ordernumber = num;
    this.clientorderService.GetMyOrder(+num).then((data: OrderViewModel) => {
      this.orderDetails = data;
    });
  }
  Reset() {
    this.orderDetails = {
      SubJectArea: '',
      TypeOfDocument: '',
      NumberOfWords: '',
      Spacing: false,
      Urgency: '',
      DueDate: Date.now,
      Rewriter: false,
      AcademicLevel: '',
      NoOfReferences: 0,
      Style: '',
      Currency: '',
      Note: '',
      preferredLanguage: '',
      ClientId: 0,
      OrderNumber: '',
      OrderDate: '',
      Title: '',
      OrderCost: '',
      Paid: '',
      CompletedDate: '',
      Spaces: '',
      Status: '',
      OrderValue: 0,
    };
  }
}

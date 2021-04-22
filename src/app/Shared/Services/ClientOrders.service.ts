import { PaidOrders } from './../Models/PaidOrder';
import { Injectable } from '@angular/core';
import { OrdersViewModel } from '../Models/OrdersViewModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ClientOrdersService {
  totalOrders = 0;
  totalPending = 0;
  totalCompeleted = 0;
  totalAssigned = 0;
  totalRejected = 0;
  totalInProgress = 0;
  AllOrdersList: OrdersViewModel[] = [];
  payment = new PaidOrders();
  constructor(private http: HttpClient) {}
  GetMyOrders(clientid: number, all: number): any {
    return this.http
      .get(environment.ApiUrl + '/Orders/All/' + clientid + '/' + all)
      .toPromise();
  }
  LoadAllMyOrders(id: number, queryAll: number) {
    this.GetMyOrders(id, queryAll).then(
      (data: {
        enumerable: OrdersViewModel[];
        data: {
          totalCompeleted: number;
          totalPending: number;
          totalOrders: number;
          totalAssigned: number;
          totalInProgress: number;
          totalRejected: number;
        };
      }) => {
        this.AllOrdersList = data.enumerable;
        this.totalCompeleted = data.data.totalCompeleted;
        this.totalPending = data.data.totalPending;
        this.totalOrders = data.data.totalOrders;
        this.totalAssigned = data.data.totalAssigned;
        this.totalInProgress = data.data.totalInProgress;
        this.totalRejected = data.data.totalRejected;
      }
    );
  }
  GetMyOrder(orderNumber: number): any {
    return this.http
      .get(environment.ApiUrl + '/Orders/client/details/' + orderNumber)
      .toPromise();
  }
  GetBackEndOrder(orderNumber: number): any {
    return this.http
      .get(environment.ApiUrl + '/Orders/backend/details/' + orderNumber)
      .toPromise();
  }

  FlagPaidOrder(): any {
    return this.http.post(
      environment.ApiUrl + '/Orders/Payment/Flag',
      this.payment,
      {
        responseType: 'text',
      }
    );
  }
  FlagOrderStatus(status: any, orderNumber: any, completeDate: any): any {
    const body = {
      status,
      orderNumber,
      completeDate,
    };
    return this.http.post(environment.ApiUrl + '/Orders/Status/Update', body, {
      responseType: 'text',
    });
  }
}

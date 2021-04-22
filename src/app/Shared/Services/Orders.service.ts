import { Pricing } from './../Models/Pricing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { OrdersViewModel } from '../Models/OrdersViewModel';
import { OrdersSummary } from '../Models/OrdersSummary';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  formData: OrdersSummary = new OrdersSummary();
  pricingData: Pricing = new Pricing();
  technicalPricinglist: Pricing[] = [];
  nonTechnicalPricinglist: Pricing[] = [];

  constructor(private http: HttpClient) {}
  GetOrdersList(): any {
    return this.http.get(environment.ApiUrl + '/Orders').toPromise();
  }
  GetOrdersListByStatus(id: number): any {
    return this.http
      .get(environment.ApiUrl + '/Orders/backend/' + id)
      .toPromise();
  }
  GetPricingList(): any {
    return this.http
      .get(environment.ApiUrl + '/Pricing/table/' + 'all')
      .toPromise();
  }
  GetPricingUpdate(): any {
    return this.http
      .get(environment.ApiUrl + '/Pricing/table/' + 'Update')
      .toPromise();
  }
  SaveOrdersPrice(price: Pricing) {
    return this.http.post(environment.ApiUrl + '/Pricing/save', price, {
      responseType: 'text',
    });
  }
  GetCharges(urgency: string, level: string, discipline: string): any {
    const costUrl =
      environment.ApiUrl +
      '/Pricing/Level/Cost?urgency=' +
      urgency +
      '&level=' +
      level +
      '&discipline=' +
      discipline;
    return this.http.get(costUrl).toPromise();
  }
}

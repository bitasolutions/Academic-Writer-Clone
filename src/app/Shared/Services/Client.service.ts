import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from '../Models/OrderDetails';
import { environment } from 'src/environments/environment.prod';
import { Client, ClientRegistered } from '../Models/Client';
import { Countries } from '../Models/Countries';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  isLoggedIn = false;
  formDetailsData: OrderDetails = new OrderDetails();
  userData: Client = new Client();
  userList: ClientRegistered[] = [];
  registeredUser: ClientRegistered;
  countriesList: Countries[] = [];
  constructor(private http: HttpClient) {
    this.registeredUser = new ClientRegistered();
  }
  SaveOrders(details) {
    const body = {
      ...details,
      Details: this.formDetailsData,
    };
    return this.http.post(environment.ApiUrl + '/Orders/save', body, {
      responseType: 'text',
    });
  }
  getCountries() {
    return this.http.get<any>('assets/countries.json').toPromise();
  }
  SaveClient(userData) {
    return this.http.post(environment.ApiUrl + '/Client', userData, {
      responseType: 'text',
    });
  }
  GetClientsList() {
    return this.http.get(environment.ApiUrl + '/Client').toPromise();
  }
  GetRegisteredClient(str: string) {
    return this.http.get(environment.ApiUrl + '/Client/' + str).toPromise();
  }
  GetUsers() {
    return this.http.get(environment.ApiUrl + '/Client/Users').toPromise();
  }
  GetUsersById(id): any {
    return this.http
      .get(environment.ApiUrl + '/Client/Users/' + id)
      .toPromise();
  }
  DeteteUser(id) {
    return this.http.delete(environment.ApiUrl + '/Client/Remove/' + id);
  }
  ResetUserData() {
    this.userData = {
      id: 0,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      contact1: '',
      country: '',
      contact2: '',
      role: '',
    };
  }
  ResetRegisteredUserData() {
    this.registeredUser = {
      ID: 0,
      Username: 'user',
      country: '',
      contact1: '',
      role: 'role',
      email: '',
      name: '',
    };
  }
}

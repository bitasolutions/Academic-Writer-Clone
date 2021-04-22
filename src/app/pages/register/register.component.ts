import { DynamicDropDownService } from './../../Shared/Services/dynamic-drop-down.service';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import * as moment from 'moment';
import { OrdersService } from 'src/app/Shared/Services/Orders.service';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public height = '220px';
  // tslint:disable-next-line: ban-types
  public fieldsSubject: Object = { text: 'Subject', value: 'Id' };

  public SubJectValue = '';

  // tslint:disable-next-line: ban-types
  public fieldsDocument: Object = { text: 'Document', value: 'Id' };
  public DocumentValue = '';
  // set a value to pre-select

  mySlideImages = [
    {
      imageUrl: '../assets/images/img2.jpg',
    },
    {
      imageUrl: '../assets/images/img1.jpg',
    },
    {
      imageUrl: '../assets/images/img4.jpg',
    },
    {
      imageUrl: '../assets/images/img5.jpg',
    },
  ];
  constructor(
    public dynamicDropDownService: DynamicDropDownService,
    public orderService: OrdersService,
    public clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.orderService.formData = {
      id: 0,
      clientId: 0,
      orderStatus: 0,
      orderDate: this.GetCurrentDate().utc().format('YYYY-MM-DD HH:mm:ss'),
      orderCost: 0,
      orderNumber: 0,
      title: '',
    };
    this.clientService.formDetailsData = {
      subJectArea: '',
      typeOfDocument: '',
      numberOfWords: '',
      spacing: false,
      urgency: '',
      days: 0,
      hours: 0,
      dueDate: Date.now,
      rewriter: false,
      academicLevel: '',
      noOfReferences: 0,
      style: '',
      currency: '',
      note: '',
      preferredLanguage: '',
      clientId: 0,
      discipline: false,
    };
  }
  private GetCurrentDate() {
    // tslint:disable-next-line: prefer-const
    let date = moment(moment(), 'YYYY-MM-DD HH:MM:SS');
    return date;
  }
}

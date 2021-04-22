import { Client, Logged } from './../../Shared/Models/Client';
import { Countries } from './../../Shared/Models/Countries';
import { OrdersSummary } from './../../Shared/Models/OrdersSummary';
import { DynamicDropDownService } from './../../Shared/Services/dynamic-drop-down.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Shared/Services/Orders.service';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/Shared/Services/Client.service';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Shared/Services/Authentication.service';
import { AESEncryptDecryptService } from 'src/app/Shared/Services/AESEncryptDecrypt.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  logged: Logged = new Logged();
  public height: string = '220px';
  public fieldsSubject: Object = { text: 'Subject', value: 'Id' };

  public SubJectValue: string = '';

  public fieldsDocument: Object = { text: 'Document', value: 'Id' };
  public DocumentValue: string = '';

  public fieldsNumberOfWords: Object = { text: 'NumberOfWords', value: 'Id' };
  public NumberOfWordsValue: string = '';

  public fieldsUrgency: Object = { text: 'Urgency', value: 'Id' };
  public UrgencyValue: string = '';

  public fieldsAcademicLevel: Object = { text: 'AcademicLevel', value: 'Id' };
  public AcademicLevelValue: string = '';

  public fieldsStyle: Object = { text: 'Style', value: 'Id' };
  public StyleValue: string = '';

  public fieldsCurrency: Object = { text: 'Currency', value: 'Id' };
  public CurrencyValue: string = '';

  public fieldsLanguage: Object = { text: 'Language', value: 'Id' };
  public LanguageValue: string = '';

  urgency = '';
  level = '';
  discipline = '';
  isValid: boolean = true;
  registrationComplete = this.clientService.isLoggedIn;
  constructor(
    public clientService: ClientService,
    public orderService: OrdersService,
    private messageService: NzMessageService,
    private router: Router,
    private aESEncryptDecryptService: AESEncryptDecryptService,
    public authenticationService: AuthenticationService,
    public dynamicDropDownService: DynamicDropDownService
  ) {}

  showError(str: string) {
    this.messageService.create('error', str);
  }
  showSuccess(str: string) {
    this.messageService.create('success', str);
  }

  ngOnInit(): void {
    this.reset();
  }
  reset(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    } else {
      this.resetVar();
    }
    this.clientService.getCountries().then((res) => {
      this.clientService.countriesList == (res.countries as Countries[]);
    });
  }
  resetVar() {
    this.orderService.formData = {
      id: 0,
      clientId: 0,
      orderStatus: 0,
      orderDate: this.GetCurrentDate().utc().format('YYYY-MM-DD HH:mm:ss'),
      orderCost: 0,
      orderNumber: 0,
      title:
        this.orderService.formData.title === null ||
        this.orderService.formData.title === undefined
          ? ''
          : this.orderService.formData.title,
    };
    this.clientService.formDetailsData = {
      subJectArea:
        this.clientService.formDetailsData.subJectArea === null ||
        this.clientService.formDetailsData.subJectArea === undefined
          ? ''
          : this.clientService.formDetailsData.subJectArea,
      typeOfDocument:
        this.clientService.formDetailsData.typeOfDocument === null ||
        this.clientService.formDetailsData.typeOfDocument === undefined
          ? ''
          : this.clientService.formDetailsData.typeOfDocument,
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
    this.clientService.ResetUserData();

    // this.authenticationService.getLoggedInUserDetails();
  }
  private GetCurrentDate() {
    var date = moment(moment(), 'YYYY-MM-DD HH:MM:SS');
    return date;
  }

  SwitchToTechnical(urgency: string, level: string, double: boolean) {
    this.discipline =
      this.clientService.formDetailsData.discipline === true
        ? 'technical'
        : 'non-technical';
    this.urgency = urgency === null || urgency === '' ? '' : urgency;
    this.level = level === null || level === '' ? '' : level;

    if (this.discipline !== '' && this.urgency !== '' && this.level !== '') {
      if (double === true) {
        this.orderService
          .GetCharges(this.urgency, this.level, this.discipline)
          .then((res: number) => {
            this.orderService.formData.orderCost = res + 1;
          });
      } else {
        this.orderService
          .GetCharges(this.urgency, this.level, this.discipline)
          .then((res: number) => {
            this.orderService.formData.orderCost = res;
          });
      }
    } else {
      this.orderService.formData.orderCost = 0;
    }
  }
  getDueDate(value: any): string {
    if (+value > 0) var AddHours = +value;
    var date = this.GetCurrentDate();
    var d = date.add(AddHours, 'hours').utc().format('YYYY-MM-DD HH:mm:ss');
    return d;
  }
  validateForm() {
    this.isValid = true;
    if (this.orderService.formData.orderCost == 0) {
      this.showError('Invalid Calculation of your Cost.!');
      this.isValid = false;
    } else if (
      this.clientService.formDetailsData.subJectArea == '0' ||
      this.clientService.formDetailsData.subJectArea == null
    ) {
      this.showError('Please Select Subject Area.!');
      this.isValid = false;
    } else if (
      this.clientService.formDetailsData.typeOfDocument == '0' ||
      this.clientService.formDetailsData.typeOfDocument == null
    ) {
      this.showError('Please Select Type of Document!');
      this.isValid = false;
    } else if (
      this.clientService.formDetailsData.urgency == '0' ||
      this.clientService.formDetailsData.urgency == null
    ) {
      this.showError('Please Select Urgency!');
      this.isValid = false;
    } else if (
      this.clientService.formDetailsData.academicLevel == '0' ||
      this.clientService.formDetailsData.academicLevel == null
    ) {
      this.showError('Please Select Academic Level..!');
      this.isValid = false;
    } else if (this.clientService.formDetailsData.noOfReferences <= 0) {
      this.showError('Enter Valid number of References.!');
      this.isValid = false;
    } else if (this.clientService.formDetailsData.note === '') {
      this.showError('Enter your Instuctions here,they are Required..!');
      this.isValid = false;
    }
    return this.isValid;
  }
  AuthencateOnRegistration(data: Client) {
    this.authenticationService.Login(data).subscribe(
      (res: any) => {
        this.logged = new Logged();
        localStorage.setItem('Qtoken', res.token);
        this.clientService.isLoggedIn = true;
        this.clientService.registeredUser = res.data;
        this.logged.id = this.clientService.registeredUser.ID;
        this.logged.username = this.clientService.registeredUser.Username;
        this.logged.role = this.clientService.registeredUser.role;
        const encryptedText = this.aESEncryptDecryptService.encrypt(
          JSON.stringify(this.logged)
        );
        sessionStorage.setItem('xid', encryptedText);
        if (this.logged.role == 'guest') {
          this.clientService.isLoggedIn = true;
          this.saveOrder();
          this.router.navigateByUrl('/MyOrders/Manage');
        } else this.router.navigateByUrl('/backend/OrdersList');
      },
      (err: { status: number }) => {
        if (err.status == 400)
          this.messageService.create(
            'error',
            'Incorrect username or password.'
          );
        else console.log(err);
      }
    );
  }

  OnSubmit(order) {
    if (this.validateForm()) {
      if (!this.clientService.isLoggedIn) {
        this.clientService
          .SaveClient(this.clientService.userData)
          .subscribe((res) => {
            let response = JSON.stringify(res.toString());
            if (response.includes('Error')) {
              this.showError(response);
            } else if (response.includes('Success')) {
              this.AuthencateOnRegistration(this.clientService.userData);
            }
          });
      } else {
        this.saveOrder();
      }
    }
  }
  saveOrder() {
    let json = JSON.parse(
      this.aESEncryptDecryptService.decrypt(sessionStorage.getItem('xid'))
    );
    this.clientService.formDetailsData.clientId = +json.id;
    this.orderService.formData.orderDate = this.GetCurrentDate();
    this.orderService.formData.clientId = +json.id;
    this.clientService
      .SaveOrders(this.orderService.formData)
      .subscribe((data) => {
        let dataResponse = JSON.stringify(data.toString());
        if (dataResponse.includes('Error')) {
          this.showError(dataResponse);
        } else {
          this.showSuccess(dataResponse);
          this.router.navigate(['/MyOrders/Manage']);
        }
      });
  }
}

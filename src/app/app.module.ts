import { BackendmanagementComponent } from './pages/backendmanagement/backendmanagement.component';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RegisterComponent } from './Pages/register/register.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { PlaceOrderComponent } from './Pages/place-order/place-order.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BackendOrdersSummaryComponent } from './Pages/backend-orders-summary/backend-orders-summary.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { MustMatchDirective } from './Shared/MustMatch.directive';
import { MyOrdersComponent } from './pages/MyOrders/MyOrders.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { OrdersmanagementComponent } from './pages/ordersmanagement/ordersmanagement.component';
import { ManagementComponent } from './Pages/management/management.component';
import { PendingOrdersComponent } from './Pages/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './Pages/completed-orders/completed-orders.component';
import { OrdersDetailsComponent } from './Pages/orders-details/orders-details.component';
import {
  LyHammerGestureConfig,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { LyListModule } from '@alyle/ui/list';
import { LyDividerModule } from '@alyle/ui/divider';
import { CommonModule } from '@angular/common';
import { LyGridModule } from '@alyle/ui/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LoginComponent } from './Pages/login/login.component';
import { AuthInterceptor } from './Shared/Services/AuthInterceptor';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HttpErrorInterceptor } from './Shared/Services/HttpErrorInterceptor';
import { ProfileComponent } from './Pages/profile/profile.component';
import { BackUsersComponent } from './Pages/back-users/back-users.component';

// syncfusion modules
import {
  CommandColumnService,
  EditService,
} from '@syncfusion/ej2-angular-grids';

import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {
  TextBoxModule,
  NumericTextBoxModule,
} from '@syncfusion/ej2-angular-inputs';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { PricingComponent } from './pages/pricing/pricing.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AdminOrderDetailsComponent } from './pages/admin-order-details/admin-order-details.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { BackendorderbystatusComponent } from './pages/backendorderbystatus/backendorderbystatus.component';
import { BackendorderCompleteComponent } from './pages/backendorder-complete/backendorder-complete.component';
import { BackendorderAssignedComponent } from './pages/backendorder-assigned/backendorder-assigned.component';
import { BackendorderRejectedComponent } from './pages/backendorder-rejected/backendorder-rejected.component';
import { BackendorderInProgressComponent } from './pages/backendorder-in-progress/backendorder-in-progress.component';
import { BackendorderPricingsComponent } from './pages/backendorder-pricings/backendorder-pricings.component';
import { FrontendorderAssignedComponent } from './pages/frontendorder-assigned/frontendorder-assigned.component';
import { FrontendorderInProgressComponent } from './pages/frontendorder-in-progress/frontendorder-in-progress.component';
import { FrontendorderRejectedComponent } from './pages/frontendorder-rejected/frontendorder-rejected.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 }
};
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#11CCCC',
  bgsOpacity: 1,
  bgsPosition: 'center-center',
  bgsSize: 40,
  bgsType: 'three-bounce',
  blur: 3,
  delay: 0,
  fgsColor: '#11CCCC',
  fgsPosition: 'center-center',
  fgsSize: 40,
  fgsType: 'three-bounce',
  gap: 16,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 500,
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PlaceOrderComponent,
    BackendOrdersSummaryComponent,
    MustMatchDirective,
    MyOrdersComponent,
    OrdersmanagementComponent,
    ManagementComponent,
    PendingOrdersComponent,
    CompletedOrdersComponent,
    OrdersDetailsComponent,
    LoginComponent,
    ProfileComponent,
    BackUsersComponent,
    PricingComponent,
    BackendmanagementComponent,
    AdminOrderDetailsComponent,
    ClientListComponent,
    BackendorderbystatusComponent,
    BackendorderCompleteComponent,
    BackendorderAssignedComponent,
    BackendorderRejectedComponent,
    BackendorderInProgressComponent,
    BackendorderPricingsComponent,
    FrontendorderAssignedComponent,
    FrontendorderInProgressComponent,
    FrontendorderRejectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzMenuModule,
    CommonModule,
    LyGridModule,
    NzListModule,
    NzFormModule,
    NzCardModule,
    FormsModule,
    ButtonModule,
    NzMessageModule,
    NzDropDownModule,
    HttpClientModule,
    NzCarouselModule,
    NzCheckboxModule,
    NzTableModule,
    LyThemeModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzStepsModule,
    HammerModule,
    LyListModule,
    LyDividerModule,
    GridModule,
    ButtonModule,
    DialogModule,
    TextBoxModule,
    NumericTextBoxModule,
    CheckBoxModule,
    ComboBoxModule,
    DropDownListModule,
    MenuModule,
    DatePickerModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,NzBackTopModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: LyHammerGestureConfig,
    },
    StyleRenderer,
    LyTheme2,
    {
      provide: LY_THEME_NAME,
      useValue: 'minima-light',
    },
    {
      provide: LY_THEME,
      useClass: MinimaLight,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
    EditService,
    CommandColumnService,
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

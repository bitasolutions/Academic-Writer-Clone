import { FrontendorderRejectedComponent } from './pages/frontendorder-rejected/frontendorder-rejected.component';
import { BackendorderPricingsComponent } from './pages/backendorder-pricings/backendorder-pricings.component';
import { BackendorderRejectedComponent } from './pages/backendorder-rejected/backendorder-rejected.component';
import { BackendorderInProgressComponent } from './pages/backendorder-in-progress/backendorder-in-progress.component';
import { BackendorderAssignedComponent } from './pages/backendorder-assigned/backendorder-assigned.component';
import { BackendorderCompleteComponent } from './pages/backendorder-complete/backendorder-complete.component';
import { BackendorderbystatusComponent } from './pages/backendorderbystatus/backendorderbystatus.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { AdminOrderDetailsComponent } from './pages/admin-order-details/admin-order-details.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { PlaceOrderComponent } from './Pages/place-order/place-order.component';
import { BackendOrdersSummaryComponent } from './Pages/backend-orders-summary/backend-orders-summary.component';
import { MyOrdersComponent } from './pages/MyOrders/MyOrders.component';
import { ManagementComponent } from './Pages/management/management.component';
import { PendingOrdersComponent } from './Pages/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './Pages/completed-orders/completed-orders.component';
import { OrdersDetailsComponent } from './Pages/orders-details/orders-details.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Shared/Services/AuthGuard';
import { ProfileComponent } from './Pages/profile/profile.component';
import { BackUsersComponent } from './Pages/back-users/back-users.component';
import { BackendmanagementComponent } from './pages/backendmanagement/backendmanagement.component';
import { FrontendorderAssignedComponent } from './pages/frontendorder-assigned/frontendorder-assigned.component';
import { FrontendorderInProgressComponent } from './pages/frontendorder-in-progress/frontendorder-in-progress.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Register' },
  { path: 'Register', component: RegisterComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'PlaceOrder', component: PlaceOrderComponent },
  {
    path: 'backend',
    component: BackendmanagementComponent,
    canActivate: [AuthGuard],
    data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
    children: [
      {
        path: 'OrdersList',
        component: BackendOrdersSummaryComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Orders-details/:id',
        component: AdminOrderDetailsComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Pending/:id',
        component: BackendorderbystatusComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Completed/:id',
        component: BackendorderCompleteComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Assigned/:id',
        component: BackendorderAssignedComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'InProgress/:id',
        component: BackendorderInProgressComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Rejected/:id',
        component: BackendorderRejectedComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Manager', 'Owner', 'Supervisor'] },
      },
      {
        path: 'Users',
        component: BackUsersComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Owner'] },
      },
      {
        path: 'Clients',
        component: ClientListComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Owner'] },
      },
      {
        path: 'Prices',
        component: BackendorderPricingsComponent,
        canActivate: [AuthGuard],
        data: { permittedRoles: ['Admin', 'Owner'] },
      },
    ],
  },
  {
    path: 'MyOrders',
    component: ManagementComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Manage',
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Pending',
        component: PendingOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'NewOrder',
        component: PlaceOrderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Complete',
        component: CompletedOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Assigned',
        component: FrontendorderAssignedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'inprogress',
        component: FrontendorderInProgressComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Rejected',
        component: FrontendorderRejectedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'details/:id',
        component: OrdersDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'Profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

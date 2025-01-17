import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { AddDetailComponent } from './pages/add-detail/add-detail.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';

const routes: Routes = [
  {
      path:'client',
      component:ClientComponent
  },
  {
    path:'dashboard',
    component:ClientDashboardComponent
  },
  {
    path:'bookings',
    component:MyBookingsComponent
  },
  {
    path:'ad/:adId',
    component:AddDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

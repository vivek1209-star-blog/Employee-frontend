import { ChartComponent } from './components/chart/chart.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { TabularComponent } from './components/tabular/tabular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: TabularComponent
  },
  {
    path:'add-employee', component: AddEmployeeComponent
  },
  {
    path:'chart', component: ChartComponent
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

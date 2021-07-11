import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicStateComponent } from './basic-state/basic-state.component';
import { StateManagementComponent } from './state-management.component';


const routes: Routes = [
  {
    path: '',
    component: StateManagementComponent,
    children: [
      {
        path: '',
        component: BasicStateComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BasicStateComponent,
    StateManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StateManagementModule { }

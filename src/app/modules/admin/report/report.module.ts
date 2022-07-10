import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from 'app/shared/shared.module';
import { ReportComponent } from './report.component';
import { MatTableModule } from '@angular/material/table';

const reportRoutes: Route[] = [
  {
      path     : '',
      component: ReportComponent
  }
];

@NgModule({
  declarations: [
    ReportComponent
  ],
  imports     : [
      RouterModule.forChild(reportRoutes),
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatTableModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatStepperModule,
      SharedModule
  ]
})
export class ReportModule
{
}

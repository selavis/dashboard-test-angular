
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { sidemenudownComponent } from './sidemenudown.component';
import { sidemenudownRoutes } from './sidemenudown.routing';
import { ChartistModule } from 'ng-chartist';
import { MatOptionModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(sidemenudownRoutes),
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [sidemenudownComponent]
})
export class sidemenudownModule { }

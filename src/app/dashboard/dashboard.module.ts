import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { PageTocComponent } from './page-toc/page-toc.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule
  ],
  declarations: [DashboardComponent, PageTocComponent]
})
export class DashboardModule {}

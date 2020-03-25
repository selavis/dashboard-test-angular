import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { MatBadgeModule } from '@angular/material/badge';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { homeComponent } from './home/home.component';

import { organizzazioniComponent } from './organizzazioni/organizzazioni.component';
import { registriComponent } from './registri/registri.component';
import { aprovazioniComponent } from './aprovazioni/aprovazioni.component';
import { impattoComponent } from './impatto/impatto.component';
import { informativeComponent } from './informative/informative.component';
import { violazioniComponent } from './violazioni/violazioni.component';
import { CataloghiComponent } from './cataloghi/cataloghi.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatbadgeComponent } from './matbadge/matbadge.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    homeComponent,
    organizzazioniComponent,
    registriComponent,
    aprovazioniComponent,
    impattoComponent,
    informativeComponent,
    violazioniComponent,
    CataloghiComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    MatbadgeComponent
  ]
})
export class MaterialComponentsModule { }

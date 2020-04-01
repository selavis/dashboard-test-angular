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
import { documentazioneComponent } from './documentazione/documentazione.component';
import { importazioniComponent } from './importazioni/importazioni.component';
import {
  feedbackComponent
} from './feedback/feedback.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { impostazioniComponent } from './impostazioni/impostazioni.component';
import { attivitaComponent } from './attivita/attivita.component';


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
    documentazioneComponent,
    importazioniComponent,
    feedbackComponent,
    TooltipComponent,
    SnackbarComponent,
    impostazioniComponent,
    attivitaComponent,
  ]
})
export class MaterialComponentsModule { }

import { Routes } from '@angular/router';

import { homeComponent } from './home/home.component';
import { organizzazioniComponent } from './organizzazioni/organizzazioni.component';
import { registriComponent } from './registri/registri.component';
import { aprovazioniComponent } from './aprovazioni/aprovazioni.component';
import { impattoComponent } from './impatto/impatto.component';
import { informativeComponent } from './informative/informative.component';
import { violazioniComponent } from './violazioni/violazioni.component';
import { CataloghiComponent } from './cataloghi/cataloghi.component';
import { documentazioneComponent } from './documentazione/documentazione.component';
import { importazioniComponent } from './importazioni/importazioni.component';
import { feedbackComponent } from './feedback/feedback.component';
import { impostazioniComponent } from './impostazioni/impostazioni.component';
import { attivitaComponent } from './attivita/attivita.component';

export const MaterialRoutes: Routes = [
  {
    path: 'home',
    component: homeComponent,
  },
  {
    path: 'organizzazioni',
    component: organizzazioniComponent
  },
  {
    path: 'registri',
    component: registriComponent
  },
  {
    path: 'aprovazioni',
    component: aprovazioniComponent
  },
  {
    path: 'impatto',
    component: impattoComponent
  },
  {
    path: 'informative',
    component: informativeComponent
  },
  {
    path: 'violazioni',
    component: violazioniComponent
  },
  {
    path: 'cataloghi',
    component: CataloghiComponent
  },
  {
    path: 'documentazione',
    component: documentazioneComponent
  },
  {
    path: 'importazioni',
    component: importazioniComponent
  },
  {
    path: 'feedback',
    component: feedbackComponent
  },
  {
    path: 'impostazioni',
    component: impostazioniComponent
  },
  {
    path: 'attivita',
    component: attivitaComponent
  }
];

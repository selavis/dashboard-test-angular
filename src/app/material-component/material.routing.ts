import { Routes } from '@angular/router';

import { homeComponent } from './home/home.component';
import { organizzazioniComponent } from './organizzazioni/organizzazioni.component';
import { registriComponent } from './registri/registri.component';
import { aprovazioniComponent } from './aprovazioni/aprovazioni.component';
import { impattoComponent } from './impatto/impatto.component';
import { informativeComponent } from './informative/informative.component';
import { violazioniComponent } from './violazioni/violazioni.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

export const MaterialRoutes: Routes = [
  {
    path: 'home',
    component: homeComponent
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
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  }
];

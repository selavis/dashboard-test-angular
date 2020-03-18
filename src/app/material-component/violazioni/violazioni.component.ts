import { Component } from '@angular/core';

@Component({
  selector: 'app-violazioni',
  templateUrl: './violazioni.component.html',
  styleUrls: ['./violazioni.component.scss']
})
// tslint:disable-next-line: class-name
export class violazioniComponent {
  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

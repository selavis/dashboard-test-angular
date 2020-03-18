import { Component } from '@angular/core';
@Component({
  selector: 'app-organizzazioni',
  templateUrl: './organizzazioni.component.html',
  styleUrls: ['./organizzazioni.component.scss']
})
// tslint:disable-next-line: class-name
export class organizzazioniComponent {
  tiles: any[] = [
    {
      text: 'One',
      cols: 3,
      rows: 1,
      color: 'lightblue'
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen'
    },
    {
      text: 'Three',
      cols: 1,
      rows: 1,
      color: 'lightpink'
    },
    {
      text: 'Four',
      cols: 2,
      rows: 1,
      color: '#DDBDF1'
    }
  ];
}

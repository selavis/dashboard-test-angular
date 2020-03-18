import { Injectable } from '@angular/core';


export interface BadgeItem {
  type: string;
  value: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
}

const MENUITEMS = [
  { state: 'home', type: 'link', name: 'HOME', icon: 'home' },
  { state: 'dashboard', name: 'DASHBOARD', type: 'link', icon: 'dashboard' },
  { state: 'organizzazioni', type: 'link', name: 'ORGANIZZAZIONI', icon: 'domain' },
  { state: 'registri', type: 'link', name: 'REGISTRI', icon: 'assignment' },
  {
    state: 'aprovazioni', type: 'link', name: 'APROVAZIONI', icon: 'view_headline', badge: [
      { type: 'red', value: '1' }]
  },
  { state: 'impatto', type: 'link', name: 'IMPATTO', icon: 'tab' },
  { state: 'informative', type: 'link', name: 'INFORMATIVE', icon: 'web' },
  { state: 'violazioni', type: 'link', name: 'VIOLAZIONI', icon: 'vertical_align_center' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
  menuItemClick(_MenuItems: Menu) {
  }
}

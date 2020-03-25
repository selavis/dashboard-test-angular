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
  { state: 'registri', type: 'link', name: 'REGISTRI', icon: 'content_paste' },
  {
    state: 'aprovazioni', type: 'link', name: 'APROVAZIONI', icon: 'assignment_late', badge: [
      { type: 'warn', value: '1' }]
  },
  { state: 'impatto', type: 'link', name: 'IMPATTO', icon: 'verified_user' },
  { state: 'informative', type: 'link', name: 'INFORMATIVE', icon: 'info' },
  { state: 'violazioni', type: 'link', name: 'VIOLAZIONI', icon: 'flash_on' },
  { state: 'cataloghi', type: 'link', name: 'CATALOGHI', icon: 'local_library' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
  menuItemClick(_MenuItems: Menu) {
  }
}

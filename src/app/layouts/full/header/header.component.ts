import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { MenuItems } from '../../../shared/menu-items/menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})

export class AppHeaderComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
  handleMenuClick () {
  }
}

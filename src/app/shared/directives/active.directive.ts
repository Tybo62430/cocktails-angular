import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]',
})
export class ActiveDirective implements OnChanges {
  @Input('appActive') isActive: boolean;
  @HostBinding('style.backgroundColor') backGroundColor: string;
  @HostBinding('style.color') color: string;

  constructor() {}

  ngOnChanges() {
    if (this.isActive) {
      this.backGroundColor = '#3498db';
      this.color = '#ecf0f1';
    } else {
      this.backGroundColor = 'transparent';
      this.color = 'black';
    }
  }
}

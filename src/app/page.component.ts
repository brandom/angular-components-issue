import { Component, HostBinding } from '@angular/core';

import { routeAnimations } from './animations';

@Component({
  selector: 'app-page-example',
  template: `<div class="basic-container">
    <h1>Page</h1>
    <p>
      <button mat-button mat-raised-button>Basic Button</button>
    </p>
  </div>`,
  animations: [routeAnimations],
})
export class PageComponent {
  @HostBinding('@routeAnimations') routeAnimations = '';
}

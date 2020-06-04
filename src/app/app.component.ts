import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  version = VERSION;
}

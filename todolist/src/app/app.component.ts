import { Component } from '@angular/core';

// decorator - includes metadata for the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Polly';

  constructor() {
    this.changeName('Sobeck');
  }

  changeName(name:string):void {
    this.name = name;
  }
}

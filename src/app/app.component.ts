import { Component } from '@angular/core';
import { ApiCallsService } from './services/api-calls.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/main', icon: 'paper-plane' },
    { title: 'Returns', url: '/returns', icon: 'paper-plane' }
  ];
  constructor(
    public apicalls :ApiCallsService
  ) {}
}

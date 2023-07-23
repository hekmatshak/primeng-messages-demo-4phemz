import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  msgs1: Message[];
  constructor() {}

  ngOnInit() {
    this.msgs1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];
  }
}

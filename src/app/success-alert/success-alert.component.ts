import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `<p>This is successful!!!</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `,
  ],
})
export class SuccessAlertComponent {}

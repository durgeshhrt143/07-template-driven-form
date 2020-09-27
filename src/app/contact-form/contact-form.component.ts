import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  selectMethod = [
    { id: 1, value: 'phone' },
    { id: 2, value: 'email' },
  ];
  selectRadio = [
    { id: 1, value: 'phone' },
    { id: 2, value: 'email' },
  ]
  log(x) {
    console.log(x);
  }
  onSubmit(f) {
    console.log(f.value);
  }
}

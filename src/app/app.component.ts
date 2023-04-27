import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';
  onInput(value: string) {
    this.enteredText = value;
  }
  compare(randomChar: string, enteredChar: string) {
    if (!enteredChar) {
      return 'pending';
    }
    return randomChar == enteredChar ? 'correct' : 'incorrect';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  [x: string]: any;
  public name: string = 'Nam';
  public age: number = 17;
  public fruits = [
    'Durian',
    'Jackfruit',
    'Apple',
    'Peach',
    'Pineapple',
    'Coconut',
  ];

  constructor() {}
}

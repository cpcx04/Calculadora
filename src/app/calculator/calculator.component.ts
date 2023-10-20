import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  displayValue: string = '';

  appendDigit(digit: number) {
    this.displayValue += digit.toString();
  }

  add() {
    this.displayValue += "+".toString();
  }

  subtract() {
    this.displayValue += "-".toString();
  }

  calculate() {

    const result = eval(this.displayValue);

    this.displayValue = result.toString();
  }
  clear() {
    this.displayValue = "";
  }
}

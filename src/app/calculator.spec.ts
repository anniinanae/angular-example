import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
//Testi 1: kahden positiivisen luvun yhteenlasku
  it('should add two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  //Testi 2: yhteenlasku nollalla
  it('should add zero correctly', () => {
    expect(calculator.add(0, 5)).toBe(5);
  });

  //Testi 3: kahden negatiivisen luvun yhteenlasku
  it('should add two negative numbers', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  //Testi 4: kertolasku nollalla
  it('should multiply by zero', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });

  //Testi 5: kahden negatiivisen luvun kertolasku
  it('should multiply negative numbers', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});
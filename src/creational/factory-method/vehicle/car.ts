import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(custoemerName: string): void {
    console.log(`${this.name} está buscando ${custoemerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou`);
  }
}

import { CustomerDataParser } from './customer-data-parser';
import { promises } from 'fs';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<void> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.split('\n');

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t');
      this.customerData.push({ name, age, cpf });
    }
  }
}

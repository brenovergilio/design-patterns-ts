import { CustomerDataParser } from './customer-data-parser';
import { promises } from 'fs';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<void> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    for (const customer of data) {
      const { name, age, cpf } = customer;
      this.customerData.push({ name, age, cpf });
    }
  }
}

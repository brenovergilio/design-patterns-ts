import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async (): Promise<void> => {
    await this.parseData();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => {
      return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
    });
  }

  protected async parseData(): Promise<void> {}
}

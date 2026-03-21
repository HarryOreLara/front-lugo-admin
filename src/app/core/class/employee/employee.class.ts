export class Employee {
  public id: number;
  public firstName: string;
  public document: string;

  public constructor(employee: Partial<Employee> = {}) {
    this.id = employee.id ?? 0;
    this.firstName = employee.firstName ?? '';
    this.document = employee.document ?? '';
  }

  static fromJson(purchaseItem: unknown): Employee {
    const casted = purchaseItem as Record<string, unknown>;

    return new Employee({
      id: casted['id'] as number,
      firstName: casted['firstName'] as string,
      document: casted['document'] as string,
    });
  }
}

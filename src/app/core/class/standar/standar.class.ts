export class Standar {
  public id: number;
  public name: string;

  public constructor(standar: Partial<Standar> = {}) {
    this.id = standar.id ?? 0;
    this.name = standar.name ?? '';
  }

  static fromJson(standar: unknown): Standar {
    const casted = standar as Record<string, unknown>;

    return new Standar({
      id: casted['id'] as number,
      name: casted['name'] as string,
    });
  }
}

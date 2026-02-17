

export class Parameter {
  public id: number;
  public channel: string;
  public code: string;
  public description: string;

  public constructor(parameter: Partial<Parameter> = {}) {
    this.id = parameter.id ?? 0;
    this.channel = parameter.channel ?? '';
    this.code = parameter.channel ?? '';
    this.description = parameter.channel ?? '';
  }

  static fromJson(parameter: unknown): Parameter {
    console.log({parameter});
    const casted = parameter as Record<string, unknown>;

    return new Parameter({
      id: casted['id'] as number,
      channel: casted['id'] as string,
      code: casted['id'] as string,
      description: casted['id'] as string,
    });
  }
}

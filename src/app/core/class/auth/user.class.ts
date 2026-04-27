export class User {
  username: string;
  firstName: string;
  lastName: string;

  public constructor(user: Partial<User> = {}) {
    this.username = user.username ?? '';
    this.firstName = user.firstName ?? '';
    this.lastName = user.lastName ?? '';
  }

  static fromJson(user: unknown): User {
    const casted = user as Record<string, unknown>;

    return new User({
      username: casted['username'] as string,
      firstName: casted['firstName'] as string,
      lastName: casted['lastName'] as string,
    });
  }
}

export class User {
  token: string;
  refreshToken: string;
  username: string;
  firstName: string;
  lastName: string;

  public constructor(user: Partial<User> = {}) {
    this.token = user.token ?? '';
    this.refreshToken = user.refreshToken ?? '';
    this.username = user.username ?? '';
    this.firstName = user.firstName ?? '';
    this.lastName = user.lastName ?? '';
  }

  static fromJson(user: unknown): User {
    const casted = user as Record<string, unknown>;

    return new User({
      token: casted['token'] as string,
      refreshToken: casted['refreshToken'] as string,
      username: casted['username'] as string,
      firstName: casted['firstName'] as string,
      lastName: casted['lastName'] as string,
    });
  }
}

export class User {
  id: number;
  realm: string;
  username: string;
  password: string;
  email: string;
  emailVerified: true;
  token: string;
  expiration: Date;
}
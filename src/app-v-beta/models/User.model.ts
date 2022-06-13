export class User{
  constructor(
    public email: string,
    public pseudo: string,
    public username: string,
    public password: string,
    public roles: []
  ) { }
}

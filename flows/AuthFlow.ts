import { LoginPage } from '../pages/LoginPage';
import { User } from '../models/User';

export class AuthFlow {
  constructor(private loginPage: LoginPage) {}

  async login(user: User) {
    await this.loginPage.goto();
    await this.loginPage.fillUsername(user.username);
    await this.loginPage.fillPassword(user.password);
    await this.loginPage.clickLogin();
  }
}
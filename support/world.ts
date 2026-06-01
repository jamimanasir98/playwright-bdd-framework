import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import { AddRemovePage } from '../pages/AddRemovePage';
import { BasicAuthPage } from '../pages/BasicAuthPage';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { ContextMenuPage } from '../pages/ContextMenuPage';
import { DropdownPage } from '../pages/DropdownPage';
import { DragAndDropPage } from '../pages/DragAndDropPage';
import { DisappearingElementsPage } from '../pages/DisappearingElementsPage';

export class CustomWorld {
  browser!: Browser;
  page!: Page;
  alertMessage!: string;
  authFailed!: boolean;
  loginPage!: LoginPage;
  securePage!: SecurePage;
  addRemovePage!: AddRemovePage;
  basicAuthPage!: BasicAuthPage;
  brokenImagesPage!: BrokenImagesPage;
  checkboxesPage!: CheckboxesPage;
  contextMenuPage!: ContextMenuPage;
  dropdownPage!: DropdownPage;
  dragAndDropPage!: DragAndDropPage;
  disappearingElementsPage!: DisappearingElementsPage;

  async init() {
    this.browser = await chromium.launch({ headless: !!process.env.CI });
    this.page = await this.browser.newPage();
    this.loginPage = new LoginPage(this.page);
    this.securePage = new SecurePage(this.page);
    this.addRemovePage = new AddRemovePage(this.page);
    this.basicAuthPage = new BasicAuthPage(this.page);
    this.brokenImagesPage = new BrokenImagesPage(this.page);
    this.checkboxesPage = new CheckboxesPage(this.page);
    this.contextMenuPage = new ContextMenuPage(this.page);
    this.dropdownPage = new DropdownPage(this.page);
    this.dragAndDropPage = new DragAndDropPage(this.page);
    this.disappearingElementsPage = new DisappearingElementsPage(this.page);
  }

  async cleanup() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

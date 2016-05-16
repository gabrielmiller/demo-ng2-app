export class CatchatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('catchat-app h1')).getText();
  }
}

import { CatchatPage } from './app.po';

describe('catchat App', function() {
  let page: CatchatPage;

  beforeEach(() => {
    page = new CatchatPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('catchat works!');
  });
});

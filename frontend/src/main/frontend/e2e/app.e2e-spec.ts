import { Ng2bootPage } from './app.po';

describe('ng2boot App', () => {
  let page: Ng2bootPage;

  beforeEach(() => {
    page = new Ng2bootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

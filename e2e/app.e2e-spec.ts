import { BusinessLogicPage } from './app.po';

describe('business-logic App', function() {
  let page: BusinessLogicPage;

  beforeEach(() => {
    page = new BusinessLogicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

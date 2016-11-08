import { ComparisonPage } from './app.po';

describe('comparison App', function() {
  let page: ComparisonPage;

  beforeEach(() => {
    page = new ComparisonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

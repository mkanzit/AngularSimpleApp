import { LearnangularPage } from './app.po';

describe('learnangular App', function() {
  let page: LearnangularPage;

  beforeEach(() => {
    page = new LearnangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

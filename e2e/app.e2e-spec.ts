import { ReduxAngularPage } from './app.po';

describe('redux-angular App', function() {
  let page: ReduxAngularPage;

  beforeEach(() => {
    page = new ReduxAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

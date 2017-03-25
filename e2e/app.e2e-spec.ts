import { CbaExampleAppPage } from './app.po';

describe('cba-example-app App', () => {
  let page: CbaExampleAppPage;

  beforeEach(() => {
    page = new CbaExampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

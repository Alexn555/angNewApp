import { AngNewAppPage } from './app.po';

describe('ang-new-app App', () => {
  let page: AngNewAppPage;

  beforeEach(() => {
    page = new AngNewAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

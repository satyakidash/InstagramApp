import { InstagramAppPage } from './app.po';

describe('instagram-app App', () => {
  let page: InstagramAppPage;

  beforeEach(() => {
    page = new InstagramAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

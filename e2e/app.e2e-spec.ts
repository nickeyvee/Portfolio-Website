import { PersonalBlogPage } from './app.po';

describe('personal-blog App', () => {
  let page: PersonalBlogPage;

  beforeEach(() => {
    page = new PersonalBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { StudentdashboardPage } from './app.po';

describe('studentdashboard App', () => {
  let page: StudentdashboardPage;

  beforeEach(() => {
    page = new StudentdashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

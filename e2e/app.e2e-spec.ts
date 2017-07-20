import { Angular2LearningPage } from './app.po';

describe('angular2-learning App', () => {
  let page: Angular2LearningPage;

  beforeEach(() => {
    page = new Angular2LearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

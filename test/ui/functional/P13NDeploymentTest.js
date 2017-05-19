import path from 'path';
import { expect } from 'chai';
import CoreLayoutPage from '../pages/CoreLayoutPage';


describe('P13N and Submission UI Tests', () => {
  if (typeof browser === 'undefined') {
    console.warn(`Browser is not defined. Skipping ${path.basename(__filename)} tests`);
    return;
  }
  beforeEach(() => {
    browser.url('/?dev');
    CoreLayoutPage
      .goToDashboardPage()
      .verifyPageLoad();

    CoreLayoutPage
      .goToInternalPage()
      .resetSample();
  });

  it('verify personalized image is coming up in submission ui', () => {
    // P13nUI: Create a campaign code and upload an image
    const matchPage = CoreLayoutPage
      .goToCampaignPage()
      .clickMatch(1);

    matchPage
      .removeAllCriterion()
      .clickAddCriterion()
      .selectConditonField('Campaign code')
      .setConditonValue('wedding')
      .UXTargetingTab()
      .uploadImage();

    const P13NImageId = matchPage
      .getUploadedImageId();

    CoreLayoutPage
      .goToDashboardPage()
      .clickDeploy();

  });
});

import Button from '../components/Button';

/* eslint-disable class-methods-use-this */

const elementLocators = {
  ResetSample: 'button=Reset (Sample)'
};

class InternalPage {
  verifyPageLoad() {
    Button.waitForVisible(elementLocators.ResetSample);
  }

  resetSample() {
    Button.click(elementLocators.ResetSample);
    return this;
  }
}

module.exports = new InternalPage();

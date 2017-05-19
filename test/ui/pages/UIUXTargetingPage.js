/* eslint-disable class-methods-use-this */
import Button from '../components/Button';

const elementLocators = {
  actionLabel: 'label="Action label"'
};

export default class UIUXTargetingPage {
  verifyPageLoad() {
    Button.waitForVisible(elementLocators.actionLabel);
  }
}

module.exports = new UIUXTargetingPage();
